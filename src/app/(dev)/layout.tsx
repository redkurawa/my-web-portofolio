export const metadata = {
  title: 'Playground',
  robots: { index: false, follow: false },
};

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-dvh'>
      <div className='sticky top-0 px-4 py-2 text-xs backdrop-blur'>
        Dev Playground
      </div>
      <main className='px4 container mx-auto py-16'>{children}</main>
    </div>
  );
}
