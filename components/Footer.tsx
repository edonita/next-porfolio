const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center text-muted-foreground">
          <p className="mb-2">
            © {new Date().getFullYear()} Edonita Berisha. All rights reserved.
          </p>
          <p className="text-sm">
            Full Stack Software Developer • Prishtina, Kosovo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
