import { FaRegUserCircle } from "react-icons/fa";
import { TbHexagonLetterM } from "react-icons/tb";
import { BiHome } from "react-icons/bi";
// import { IoIosArrowDown } from "react-icons/io";
import { BsDash } from "react-icons/bs";
import Link from "next/link";



export default function Sidebar() {
    return (
      <aside className="fixed top-0 left-0 w-60 bg-gray-900 text-white h-screen overflow-y-auto custom-scrollbar">
        <div className="text-lg font-bold text-white p-3 border-b border-white flex items-center gap-4 justify-center">
            <TbHexagonLetterM className="w-6 h-6" />
            MACHCOM
        </div>
        <div className="text-sm text-white p-3 border-b border-white flex items-center gap-3">
            <FaRegUserCircle className="w-6 h-6" />
            Charles Muema
        </div>
        <div className="p-3">
          <h2 className="text-xs font-semibold text-gray-400 py-2">MAIN</h2>
            <div className="ml-4">
                <Link href="/" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                    <BiHome />
                    Dashboard
                </Link>
                <Link href="/" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                    <BsDash />
                    Success Orders
                </Link>
                <Link href="/" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                    <BsDash />
                    Customers
                </Link>
            </div>

           
            <h2 className="text-xs font-semibold text-gray-400 py-2">PRODUCTS</h2>
                <div className="ml-4">
                    <Link href="/admin/products" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                        <BsDash />
                        All Products
                    </Link>
                    <Link href="/admin/add-product" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                        <BsDash />
                        Add Product
                    </Link>
                    <Link href="/admin/products" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                        <BsDash />
                        Edit Product
                    </Link>
                </div>
                <h2 className="text-xs font-semibold text-gray-400 py-2">CATEGORIES</h2>
                <div className="ml-4">
                    <Link href="/admin/categories" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                        <BsDash />
                        All Categories
                    </Link>
                    <Link href="/admin/add-category" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                        <BsDash />
                        Add Category
                    </Link>
                    <Link href="/" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                        <BsDash />
                        Edit Category
                    </Link>
                </div>
                <h2 className="text-xs font-semibold text-gray-400 py-2">BLOG</h2>
                <div className="ml-4">
                    <Link href="/admin/blogs" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                        <BsDash />
                        All Blogs
                    </Link>
                    <Link href="/admin/add-blog" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                        <BsDash />
                        Add Blog
                    </Link>
                    
                </div>
                <h2 className="text-xs font-semibold text-gray-400 py-2">USERS</h2>
                <div className="ml-4">
                    <Link href="/" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                        <BsDash />
                        All Users
                    </Link>
                    <Link href="/" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                        <BsDash />
                        Add User
                    </Link>
                    
                </div>
                <h2 className="text-xs font-semibold text-gray-400 py-2">CONTACT US</h2>
                <div className="ml-4">
                    <Link href="/" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                        <BsDash />
                        Messages
                    </Link>
                    <Link href="/" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                        <BsDash />
                        Feedback
                    </Link>
                    
                </div>
                <h2 className="text-xs font-semibold text-gray-400 py-2">SHIPPING</h2>
                <div className="ml-4">
                    <Link href="/" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                        <BsDash />
                        Regions
                    </Link>
                    <Link href="/" className="flex items-center text-gray-300 hover:text-white gap-2 text-sm mb-2">
                        <BsDash />
                        Counties
                    </Link>
                    
                </div>
            
        </div>
      </aside>
    );
  }