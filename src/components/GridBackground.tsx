export const GridBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#faf9f6] dark:bg-[#1a1a1a]" />
      {/* Light mode grid */}
      <div 
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />
      {/* Dark mode grid */}
      <div 
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
};
