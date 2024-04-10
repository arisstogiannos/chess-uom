import { Work_Sans } from "next/font/google";
import "./globals.css";

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["200","300","400", "500", "600", "700"],
});

export const metadata = {
  title: "Chess Uom",
  description: "Καλώς ορίσατε στην Σκακιστική ομάδα του Πανεπιστημίου Μακεδονίας!",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={worksans.style} className="bg-myBlack overflow-x-hidden">
        {children}
        
      
      </body>
    </html>
  );
}
