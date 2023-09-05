export const metadata = {
  title: 'Anand Sweets',
  description: 'Indulge in the finest selection of sweets and treats at our sweet shop. Explore a delectable range of handcrafted chocolates, mouthwatering candies, gourmet desserts, and more. Satisfy your sweet cravings with our premium confections delivered to your doorstep. Shop now for a delightful sugar rush!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
