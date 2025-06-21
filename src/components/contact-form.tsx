'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Headphones, Calendar, Download, Users } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    newsletter: false,
    terms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid gap-8 lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <div className='text-center mb-8'>
              <h2 className='text-3xl font-bold'>Kirim Pesan Kepada Kami</h2>
              <p className='mt-2 text-muted-foreground'>
                Punya pertanyaan atau ingin mendiskusikan proyek Anda? Kami ingin
                mendengar dari Anda.
              </p>
            </div>

            <Card>
              <CardContent className='p-6'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid gap-4 md:grid-cols-2'>
                    <div>
                      <Label htmlFor='firstName'>Nama Depan *</Label>
                      <Input
                        id='firstName'
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor='lastName'>Nama Belakang *</Label>
                      <Input
                        id='lastName'
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className='grid gap-4 md:grid-cols-2'>
                    <div>
                      <Label htmlFor='email'>Alamat Email *</Label>
                      <Input
                        id='email'
                        type='email'
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor='phone'>Nomor Telepon</Label>
                      <Input
                        id='phone'
                        type='tel'
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor='company'>Nama Perusahaan</Label>
                    <Input
                      id='company'
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor='service'>Layanan yang Diminati</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }>
                      <SelectTrigger>
                        <SelectValue placeholder='Pilih layanan' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='viachat'>VIaChat - WhatsApp API</SelectItem>
                        <SelectItem value='brainet'>
                          Brainet - Layanan Internet
                        </SelectItem>
                        <SelectItem value='networking'>Layanan Jaringan</SelectItem>
                        <SelectItem value='consultation'>Konsultasi Gratis</SelectItem>
                        <SelectItem value='other'>Lainnya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor='budget'>Anggaran Proyek</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        setFormData({ ...formData, budget: value })
                      }>
                      <SelectTrigger>
                        <SelectValue placeholder='Pilih rentang anggaran' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='under-5k'>Di bawah Rp 70.000.000</SelectItem>
                        <SelectItem value='5k-15k'>
                          Rp 70.000.000 - Rp 210.000.000
                        </SelectItem>
                        <SelectItem value='15k-50k'>
                          Rp 210.000.000 - Rp 700.000.000
                        </SelectItem>
                        <SelectItem value='50k-100k'>
                          Rp 700.000.000 - Rp 1.400.000.000
                        </SelectItem>
                        <SelectItem value='over-100k'>
                          Di atas Rp 1.400.000.000
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor='message'>Pesan *</Label>
                    <Textarea
                      id='message'
                      rows={6}
                      placeholder='Ceritakan tentang proyek Anda atau bagaimana kami dapat membantu Anda...'
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className='space-y-4'>
                    <div className='flex items-center space-x-2'>
                      <Checkbox
                        id='newsletter'
                        checked={formData.newsletter}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, newsletter: checked as boolean })
                        }
                      />
                      <Label htmlFor='newsletter' className='text-sm'>
                        Berlangganan buletin kami untuk pembaruan dan wawasan
                      </Label>
                    </div>

                    <div className='flex items-center space-x-2'>
                      <Checkbox
                        id='terms'
                        checked={formData.terms}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, terms: checked as boolean })
                        }
                        required
                      />
                      <Label htmlFor='terms' className='text-sm'>
                        Saya menyetujui{' '}
                        <span className='text-blue-600 hover:underline cursor-pointer'>
                          Ketentuan Layanan
                        </span>{' '}
                        dan{' '}
                        <span className='text-blue-600 hover:underline cursor-pointer'>
                          Kebijakan Privasi
                        </span>{' '}
                        *
                      </Label>
                    </div>
                  </div>

                  <Button type='submit' className='w-full' size='lg'>
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className='space-y-6'>
            <Card>
              <CardHeader>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-blue-100'>
                    <Headphones className='h-5 w-5 text-blue-600' />
                  </div>
                  <CardTitle className='text-lg'>Dukungan 24/7</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground mb-3'>
                  Tim dukungan ahli kami tersedia sepanjang waktu untuk membantu Anda
                  dengan pertanyaan atau masalah.
                </p>
                <Button variant='outline' size='sm'>
                  Akses Portal Dukungan
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-green-100'>
                    <Calendar className='h-5 w-5 text-green-600' />
                  </div>
                  <CardTitle className='text-lg'>Jadwalkan Demo</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground mb-3'>
                  Lihat solusi kami dalam tindakan dengan demo yang disesuaikan dengan
                  kebutuhan bisnis Anda.
                </p>
                <Button variant='outline' size='sm'>
                  Pesan Demo
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-purple-100'>
                    <Download className='h-5 w-5 text-purple-600' />
                  </div>
                  <CardTitle className='text-lg'>Unduh Sumber Daya</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground mb-3'>
                  Akses whitepaper, studi kasus, dan dokumentasi teknis kami.
                </p>
                <Button variant='outline' size='sm'>
                  Lihat Sumber Daya
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-orange-100'>
                    <Users className='h-5 w-5 text-orange-600' />
                  </div>
                  <CardTitle className='text-lg'>Ikuti Kami</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground mb-3'>
                  Tetap terhubung dan dapatkan pembaruan terbaru
                </p>
                <div className='flex gap-2'>
                  <Button variant='outline' size='sm'>
                    Facebook
                  </Button>
                  <Button variant='outline' size='sm'>
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
