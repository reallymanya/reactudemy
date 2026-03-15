
import './App.css';
import Card from "./components/Card.jsx";
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import {Button} from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

function App() {

  return (
    <>
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
    <Hero/>
  <Button variant = "outline">Click Me</Button>
    <Header/>
      <h1 className='text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl'>Learn to Integrate tailwind</h1>
      <div className='flex gap-4'>
     <Card title = "Buy Python Course" buttontext = "Join now" imageurl={"https://plus.unsplash.com/premium_photo-1686054306703-fe68a1b0a7aa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"} />
     <Card title = "Buy Cpp Course" imageurl = {"https://i.pinimg.com/736x/b7/17/61/b7176122fcb49f0fc7c4836443cd4c95.jpg"}/>
      </div>
    </>
  )
}

export default App
