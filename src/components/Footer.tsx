const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://github.com/haleyher" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/haleyher" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="mailto:haleyher@mit.edu" className="hover:text-foreground transition-colors">Email</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Haley Hernandez. MIT Class of 2028.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
