import { useContext, useEffect } from "react"
import { LangContext, ThemeContext } from "../App"
import { Link } from "react-router-dom"
import { useRef } from "react"
function Header(){
    const{theme, setTheme}= useContext(ThemeContext)
    const{language, setLanguage}=useContext(LangContext)
    const darkRef = useRef()

    useEffect(()=>{
        if(localStorage.getItem('endstart')){
            let copy = localStorage.getItem('endstart');
            darkRef.current.style.justifyContent=copy
        }
    },[])

    function handleClick(){
        if(theme=='light'){
             setTheme("dark")
             darkRef.current.style.justifyContent = 'end'
             localStorage.setItem('endstart', 'end')
            } else{
                setTheme("light")
                darkRef.current.style.justifyContent = 'start'
                localStorage.setItem('endstart', 'start')

        }
    }

    function handleChange(){
        if(language == 'uz'){
            setLanguage('en')
        } else{
            setLanguage('uz')
        }
    }

    return(
        <div className="headerr w-full max-w-7xl h-[101px] py-3 flex items-center justify-between mx-auto">

            <h1 className="text-3xl ">
                YOUR LOGO
            </h1>

            <ul className="flex items-center gap-1">
                <select className="px-2 bg-transparent">
                    <option value="assets">Assete</option>
                    <option value="assets">Creators</option>
                    <option value="assets">Careers</option>
                    <option value="assets">Go Pro</option>
                </select>
                <li className="px-2"><Link to='/'>Creators</Link></li>
                <li className="px-2"><Link to='/'>Careers</Link></li>
                <li className="px-2"><Link to='/'>Go Pro</Link></li>
            </ul>

            <div className="flex items-center gap-2">
                <div className="w-20 p-1 rounded-[25px] h-10 bgdark flex justify-start" ref={darkRef} onClick={handleClick}>
                    <div className="w-[40%] h-full bgdarkchild rounded-2xl"></div>
                </div>
                <select value={language} className="p-2 bg-transparent font-bold border" onChange={handleChange}>
                   <option value="uz">uz</option>
                   <option value="en">en</option>
                </select>
                <button className="font-bold  px-3 flex items-center">Login</button>
                <button className="bg-blue-800 text-white font-bold  py-1 px-3 rounded-2xl flex items-center">Sign up</button>
            </div>  
        </div>
    )
}

export default Header