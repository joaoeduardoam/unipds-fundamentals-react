const hobbies = [
    "Motorcycle",
    "Travel",
    "Reading",
    "Music",
]

export const MyHobbies = () => {

    const [hobbyPreferred, ...otherHobbies] = hobbies;

    const newHobbies = ["Party", "Cinema"]
    const allHobbies = [...otherHobbies, ...newHobbies] //otherHobbies.push(...newHobbies)

    return (

    <div>
    <h2>My hobbies: </h2>
    <ul className="list-disc pl-10">
            <li className="font-bold">{hobbyPreferred}</li>
            {allHobbies.map((allHobby, i) => <li key={`allHobby-${i}`}>{allHobby}</li>)}
    </ul>
    </div>
    
    )
};