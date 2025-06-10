import { Menu } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

import { Input } from "./components/ui/input";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "./components/ui/sheet";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Mobile First */}
      <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 sm:px-6 lg:px-8">
          {/* Logo - Responsive sizing */}
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            RMS
          </h2>

          {/* Desktop Menu - Hidden on mobile */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8 items-center">
            <a 
              href="/" 
              className="text-base lg:text-lg font-semibold hover:text-gray-600 transition-colors"
            >
              Home
            </a>
            <a 
              href="/" 
              className="text-base lg:text-lg font-semibold hover:text-gray-600 transition-colors"
            >
              About
            </a>
            <a 
              href="/" 
              className="text-base lg:text-lg font-semibold hover:text-gray-600 transition-colors"
            >
              Cart
            </a>
          </nav>

          {/* Mobile Menu (Sheet) - Only visible on mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] flex flex-col">
              {/* Header with Close button */}
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <h2 className="text-lg font-bold">Menu</h2>
                <SheetClose asChild>
                  <Button size="icon" variant="ghost">
                    {/* <Menu className="h-6 w-6" /> */}
                  </Button>
                </SheetClose>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-6 mt-6 px-4 text-lg font-semibold">
                <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
                <a href="/" className="hover:text-blue-600 transition-colors">About</a>
                <a href="/" className="hover:text-blue-600 transition-colors">Cart</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Search Section - Mobile First */}
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
          <Input 
            placeholder="Search Item..." 
            className="flex-1 h-10 sm:h-12 text-base"
          />
          <Button className="h-10 sm:h-12 px-6 sm:px-8 font-semibold">
            Search
          </Button>
        </div>
      </div>

      {/* Products Grid - Mobile First Responsive */}
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {/* Product Card 1 */}
          <Card className="w-full flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg sm:text-xl font-bold text-center">
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-4">
              <img
                src="https://cdn.dribbble.com/users/2626994/screenshots/8086173/cook_4x.png"
                alt="Phone"
                className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg"
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-3 pt-3">
              <CardAction className="font-semibold text-lg text-green-600">
                Price: $20
              </CardAction>
              <button className="bg-red-500 hover:bg-red-600 px-4 py-3 text-sm font-semibold rounded-xl text-white w-full transition-colors">
                ADD TO CART
              </button>
            </CardFooter>
          </Card>

          {/* Product Card 2 */}
          <Card className="w-full flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg sm:text-xl font-bold text-center">
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-4">
              <img
                src="https://cdn.dribbble.com/users/2626994/screenshots/8086173/cook_4x.png"
                alt="Phone"
                className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg"
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-3 pt-3">
              <CardAction className="font-semibold text-lg text-green-600">
                Price: $20
              </CardAction>
              <button className="bg-red-500 hover:bg-red-600 px-4 py-3 text-sm font-semibold rounded-xl text-white w-full transition-colors">
                ADD TO CART
              </button>
            </CardFooter>
          </Card>

          {/* Additional cards for better demonstration */}
          <Card className="w-full flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg sm:text-xl font-bold text-center">
                Laptop
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-4">
              <img
                src="https://cdn.dribbble.com/users/2626994/screenshots/8086173/cook_4x.png"
                alt="Laptop"
                className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg"
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-3 pt-3">
              <CardAction className="font-semibold text-lg text-green-600">
                Price: $899
              </CardAction>
              <button className="bg-red-500 hover:bg-red-600 px-4 py-3 text-sm font-semibold rounded-xl text-white w-full transition-colors">
                ADD TO CART
              </button>
            </CardFooter>
          </Card>

          <Card className="w-full flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg sm:text-xl font-bold text-center">
                Tablet
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-4">
              <img
                src="https://cdn.dribbble.com/users/2626994/screenshots/8086173/cook_4x.png"
                alt="Tablet"
                className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg"
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-3 pt-3">
              <CardAction className="font-semibold text-lg text-green-600">
                Price: $399
              </CardAction>
              <button className="bg-red-500 hover:bg-red-600 px-4 py-3 text-sm font-semibold rounded-xl text-white w-full transition-colors">
                ADD TO CART
              </button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;