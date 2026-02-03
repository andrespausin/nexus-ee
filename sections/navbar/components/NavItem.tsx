
import { ReactNode } from 'react';

const NavItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-black/30 backdrop-blur-md px-4 py-2 rounded-3xl hover:bg-white hover:text-black hover:rounded-3xl hover:transition-colors delay-150 duration-300 ease-in-out">
      {children}
    </div>
  )
}

export default NavItem;