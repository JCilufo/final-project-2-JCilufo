export default function Card({ species }) {
  const { name, classification, eye_colors, hair_colors } = species

  return (
    <section className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="mt-2 text-gray-600">Classification: {classification}</p>
        <p className="mt-2 text-gray-600">Eye colors: {eye_colors}</p>
        <p className="mt-2 text-gray-600">Hair colors: {hair_colors}</p>
      </div>
    </section>
  )
}
