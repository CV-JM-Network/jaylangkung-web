'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

function darkenColor(hex: string, amount = 0.15) {
  let c = hex.replace('#', '');
  if (c.length === 3)
    c = c
      .split('')
      .map((x) => x + x)
      .join('');
  const num = parseInt(c, 16);
  let r = (num >> 16) - Math.round(255 * amount);
  let g = ((num >> 8) & 0x00ff) - Math.round(255 * amount);
  let b = (num & 0x0000ff) - Math.round(255 * amount);
  r = Math.max(0, r);
  g = Math.max(0, g);
  b = Math.max(0, b);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

export default function PricingButton({
  popular,
  color,
}: {
  popular: boolean;
  color: string;
}) {
  const [bg, setBg] = useState(popular ? color : '#fff');
  const [text, setText] = useState(popular ? '#fff' : color);

  return (
    <Button
      asChild
      className={`w-full`}
      style={{
        backgroundColor: bg,
        color: text,
        borderColor: !popular ? color : undefined,
        transition: 'background 0.2s, color 0.2s',
      }}
      onMouseOver={() => {
        if (popular) {
          setBg(darkenColor(color));
        } else {
          setBg('#f3f4f6'); // Tailwind gray-100
          setText(color);
        }
      }}
      onMouseOut={() => {
        setBg(popular ? color : '#fff');
        setText(popular ? '#fff' : color);
      }}
      variant={popular ? 'default' : 'outline'}>
      <Link href='/contact'>Mulai Sekarang</Link>
    </Button>
  );
}
