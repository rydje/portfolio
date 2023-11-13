export default function Label({ text }: {text: string}) {
    return (
        <div className="text-xs mr-1.5 mt-2 text-amaranth-500 bg-amaranth-900 rounded-full text-center py-1 px-3">
            {text}
        </div>
    )
}