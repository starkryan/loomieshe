import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">NextZenLoom</h2>
              <p className="text-muted-foreground">
                Advanced AI solutions to transform your business.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Products</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      AI Assistant
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      Predictive Analytics
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      Developer Tools
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies-policy" className="text-muted-foreground hover:text-primary">
                      Cookies Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
              <p className="text-muted-foreground">
                Have questions? Reach out to us.
              </p>
              <Link href="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-muted-foreground/20 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} NextZenLoom. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
