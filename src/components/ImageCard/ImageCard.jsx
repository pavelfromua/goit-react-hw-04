export default function ImageCard({data, openModal}) {
    return (
        <div >
            <img
                onClick={() => openModal(data.alt_description, data.urls.regular)}
                src={data.urls.small}
                alt={data.alt_description}
            />
        </div>
    );
}