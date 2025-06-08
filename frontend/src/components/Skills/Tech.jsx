const Tech = ({arr})=>{
    return<>
    <ul className="flex gap-2 m-4">
        {arr.map((item)=>(
            <li className="rounded-md bg-gray-300 p-1 ">{item}</li>
        ))}
    </ul>
    </>
}
export default Tech;