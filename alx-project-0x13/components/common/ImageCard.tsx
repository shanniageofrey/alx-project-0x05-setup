import { GeneratedImagProps } from "../../interfaces";


const ImageCard: React.FC<GeneratedImagProps> = ({ imageUrl, prompt, width }) => {
    return (
        <div>
            <img src={imageUrl} alt={prompt} className="mt-6 border hover:cursor-pointer" />
            <h2 className={`${width ? "text-sm" : "text-xl"} font-semibold mt-2`}>Your prompt:</h2>
            <p className={`${width ? "text-xs" : "text-lg"} text-gray-700 mb-4`}>{prompt}</p>
        </div>
    )
}

export default ImageCard;