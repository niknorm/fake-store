

interface Props{
    className?: string
    text: string;
    onClick: () => void;
}
export const Button = ({text, onClick, className}: Props ) => {
    console.log(className)
    return (
        <button onClick={onClick} className={className}>{text}</button>
    )
}