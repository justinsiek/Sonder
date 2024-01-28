export default function Card({ size, image }) {
    const sizeToHeight = {
        small: 200,
        medium: 270,
        large: 340,
    };

    const height = sizeToHeight[size] || 270;

    return (
        <div style={{ height: `${height}px`, breakInside: "avoid" }} className=" my-2 p-0 rounded-2xl bg-orange-50 w-[280px] flex justify-center items-center">
            <p>Card</p>
        </div>
    )
}