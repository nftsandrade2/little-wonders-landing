const FooterSection = () => {
  return (
    <footer className="py-10 bg-foreground">
      <div className="container mx-auto px-4 text-center space-y-4">
        <p className="text-sm text-primary-foreground/70">Nome do Produto © {new Date().getFullYear()}</p>
        <div className="flex justify-center gap-6 text-xs text-primary-foreground/50">
          <a href="#" className="hover:text-primary-foreground/80 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-primary-foreground/80 transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-primary-foreground/80 transition-colors">Contato</a>
        </div>
        <p className="text-xs text-primary-foreground/40">Este produto não garante resultados específicos.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
