import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get('slug');

    // Input validation for slug parameter
    if (slug && !/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json(
        { success: false, error: 'Invalid slug format. Use lowercase letters, numbers, and hyphens only.' },
        { status: 400 }
      );
    }

    if (slug) {
      // Fetch single plan by slug
      const plan = await prisma.residentialPlan.findUnique({
        where: { slug },
      });

      if (!plan) {
        return NextResponse.json(
          { success: false, error: 'Plan not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ success: true, data: plan });
    }

    // Fetch all active plans ordered by display_order
    const plans = await prisma.residentialPlan.findMany({
      where: { isActive: true },
      orderBy: { displayOrder: 'asc' },
    });

    return NextResponse.json({ success: true, data: plans });
  } catch (error) {
    console.error('Error fetching residential plans:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch plans' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
