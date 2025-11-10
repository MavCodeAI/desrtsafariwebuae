import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PackageDetailClient from '@/components/PackageDetailClient';
import packagesData from '@/data/packages.json';

export function generateStaticParams() {
  return packagesData.map((pkg) => ({
    id: pkg.id,
  }));
}

export default function PackageDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const packageData = packagesData.find((pkg) => pkg.id === params.id);

  if (!packageData) {
    return notFound();
  }

  return <PackageDetailClient packageData={packageData} />;
}
