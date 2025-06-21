'use client';

import type React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Users } from 'lucide-react';
import { useState } from 'react';

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

  const isFormValid =
    formData.firstName.trim() !== '' &&
    formData.lastName.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== '' &&
    formData.service.trim() !== '' &&
    formData.terms;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format the email
    const subject = 'Pesan dari Form Kontak Website';
    const body =
      `Halo Admin,%0D%0A` +
      `Nama: ${formData.firstName} ${formData.lastName}%0D%0A` +
      `Email: ${formData.email}%0D%0A` +
      `Telepon: ${formData.phone}%0D%0A` +
      `Perusahaan: ${formData.company}%0D%0A` +
      `Layanan: ${formData.service}%0D%0A` +
      `Anggaran: ${formData.budget}%0D%0A` +
      `Pesan: ${formData.message}`;
    const adminEmail = 'admin@example.com';
    const mailtoLink = `mailto:${adminEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${body}`;
    window.open(mailtoLink, '_blank');
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
                      <Label htmlFor='firstName' className='mb-2'>
                        Nama Depan *
                      </Label>
                      <Input
                        id='firstName'
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        type='text'
                        required
                        className='focus-visible:ring-2 focus-visible:ring-red-500'
                      />
                    </div>
                    <div>
                      <Label htmlFor='lastName' className='mb-2'>
                        Nama Belakang *
                      </Label>
                      <Input
                        id='lastName'
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        type='text'
                        required
                        className='focus-visible:ring-2 focus-visible:ring-red-500'
                      />
                    </div>
                  </div>

                  <div className='grid gap-4 md:grid-cols-2'>
                    <div>
                      <Label htmlFor='email' className='mb-2'>
                        Alamat Email *
                      </Label>
                      <Input
                        id='email'
                        type='email'
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className='focus-visible:ring-2 focus-visible:ring-red-500'
                      />
                    </div>
                    <div>
                      <Label htmlFor='phone' className='mb-2'>
                        Nomor Telepon
                      </Label>
                      <Input
                        id='phone'
                        type='tel'
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className='focus-visible:ring-2 focus-visible:ring-red-500'
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor='company' className='mb-2'>
                      Nama Perusahaan
                    </Label>
                    <Input
                      id='company'
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className='focus-visible:ring-2 focus-visible:ring-red-500'
                    />
                  </div>

                  <div>
                    <Label htmlFor='service' className='mb-2'>
                      Layanan yang Diminati *
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                      required>
                      <SelectTrigger className='bg-white'>
                        <SelectValue placeholder='Pilih layanan' />
                      </SelectTrigger>
                      <SelectContent className='bg-white'>
                        <SelectItem value='viachat'>ViaChat - WhatsApp API</SelectItem>
                        <SelectItem value='brainnet'>
                          Brainnet - Layanan Internet
                        </SelectItem>
                        <SelectItem value='networking'>Layanan Jaringan</SelectItem>
                        <SelectItem value='consultation'>Konsultasi Gratis</SelectItem>
                        <SelectItem value='other'>Lainnya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor='budget' className='mb-2'>
                      Anggaran Proyek
                    </Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        setFormData({ ...formData, budget: value })
                      }>
                      <SelectTrigger className='bg-white'>
                        <SelectValue placeholder='Pilih rentang anggaran' />
                      </SelectTrigger>
                      <SelectContent className='bg-white'>
                        <SelectItem value='under-10jt'>Di bawah Rp 10.000.000</SelectItem>
                        <SelectItem value='10jt-50jt'>
                          Rp 10.000.000 - Rp 50.000.000
                        </SelectItem>
                        <SelectItem value='50jt-150jt'>
                          Rp 50.000.000 - Rp 150.000.000
                        </SelectItem>
                        <SelectItem value='150jt-500jt'>
                          Rp 150.000.000 - Rp 500.000.000
                        </SelectItem>
                        <SelectItem value='over-500jt'>Di atas Rp 500.000.000</SelectItem>
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

                  <Button
                    type='submit'
                    size='lg'
                    className='w-full bg-red-500 text-white hover:bg-red-600 '
                    disabled={!isFormValid}>
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
                    Instagram
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
