import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-background border-t">
      <div className="container mx-auto">
        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IBSRA Software
              </span>
            </div>
            <p className="text-muted-foreground">
              Transforming businesses through innovative software solutions
              and cutting-edge technology.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Custom Development</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Data Analytics</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li><a href="#" className="hover:text-foreground transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:ibsra.business@gmail.com" className="hover:underline">
                  ibsra.business@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">Address:</span> Heliopolis, Cairo, Egypt
              </p>
            </div>

            <ul className="flex gap-4 mt-4 text-muted-foreground text-xl">
              {/* TikTok SVG */}
              <li>
                <a href="https://www.tiktok.com/@ibsra1" target="blank" className="hover:text-foreground transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" className="w-5 h-5">
                    <path d="M232 72a56 56 0 0 1-56-56 8 8 0 0 0-8-8h-40a8 8 0 0 0-8 8v120a24 24 0 1 1-24-24 8 8 0 0 0 8-8V80a8 8 0 0 0-8-8 72 72 0 1 0 72 72v-43.4a103.6 103.6 0 0 0 48 11.4 8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8Z"/>
                  </svg>
                </a>
              </li>

              {/* Facebook SVG */}
              <li>
                <a href="https://www.facebook.com/profile.php?id=100083762527353" target="blank" className="hover:text-foreground transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.8h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12"/>
                  </svg>
                </a>
              </li>

              {/* YouTube SVG */}
              <li>
                <a href="https://www.youtube.com/@IBSRA1" target="blank" className="hover:text-foreground transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17.7 2.5 12 2.5 12 2.5h0s-5.7 0-8.6.4c-.4.1-1.3.1-2.1 1-.6.7-.8 2.3-.8 2.3S0 8.2 0 10.2v1.6c0 2 .2 4 .2 4s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.8.2 7.6.4 8.6.4s5.7 0 8.6-.4c.4-.1 1.6-.1 2.4-1 .6-.7.8-2.3.8-2.3s.2-2 .2-4v-1.6c0-2-.2-4-.2-4zM9.6 14.6V8.9l6.4 2.9-6.4 2.8z"/>
                  </svg>
                </a>
              </li>

              {/* LinkedIn from lucide */}
              <li>
                <a href="https://www.linkedin.com/company/ibsra1/" target="blank" className="hover:text-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </li>

              {/* Instagram from lucide */}
              <li>
                <a href="https://www.instagram.com/ibsra.egypt/" target="blank" className="hover:text-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; 2024 IBSRA. All rights reserved. Built with innovation and passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
