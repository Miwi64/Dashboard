/**
 * React Component for the Menu sidebar.
 * @returns {JSX.Element} - A JSX element representing the Menu sidebar. 
 */

import Link from "next/link";
import { Lato } from 'next/font/google'

/*
    Importing Titles font
*/
const title = Lato({ subsets: ['latin'], weight: ["700"]})

/*
    Website routes
*/
const menuRoutes = [
    {
        route: '/',
        name: 'Inicio'
    },
    {
        route: '/composition',
        name: 'Composición Corporal'
    },
    {
        route: '/about',
        name: 'Acerca de'
    }
]

function Menu() {
    return(
        <div className="w-[20%] bg-black h-screen p-10">
            <h1 className={`text-[#807980] mt-5 mb-5 text-4xl`}>Menu</h1>
            {/*
                Generating Menu links list.
            */}
            <ol>
                {
                    menuRoutes.map((menu,index) => (
                        <li key={index} className="text-white hover:text-primary mb-10 hover:scale-125 
                        hover:translate-x-6 transition ease-in duration-75">
                            <Link href={menu.route} className={`${title.className} text-2xl`}>{menu.name}</Link></li>
                    ))
                }
            </ol>
        </div>
    );
}
export default Menu;