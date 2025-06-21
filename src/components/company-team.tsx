import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { User } from 'lucide-react';

const team = [
  {
    name: 'Eko Rudiyanto',
    position: 'Founder & CEO',
    image: '',
  },
  {
    name: 'Defrian Tri Ramadhan Putra',
    position: '',
    image: 'https://brain.jaylangkung.co.id/source/1/defrian.jpg',
  },
  {
    name: 'Kusuma',
    position: '',
    image: '',
  },
  {
    name: 'Okta',
    position: '',
    image: '',
  },
  {
    name: 'Muthia',
    position: 'Developer',
    image: '',
  },
  {
    name: 'Dhinta',
    position: 'Developer',
    image: '',
  },
  {
    name: 'Hanif Naufal Ashari',
    position: 'Developer',
    image: '',
  },
];

export default function CompanyTeam() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>Meet Our Development Team</h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            The talented developers behind our products
          </p>
          <div className='mx-auto mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600'></div>
        </div>

        <div className='mt-16 grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {team.map((member, index) => (
            <Card
              key={index}
              className='flex flex-col items-center text-center shadow-md p-6 rounded-xl bg-gray-100 group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
              <div className='mb-4'>
                <Avatar className='h-32 w-32'>
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className='flex items-center justify-center h-full w-full'>
                    <User className='w-16 h-16 text-gray-400' />
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className='min-h-[32px] flex items-center justify-center'>
                <h3 className='text-lg font-semibold'>{member.name}</h3>
              </div>
              <p className='mb-1 text-sm font-medium uppercase tracking-wide text-blue-600'>
                {member.position}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
