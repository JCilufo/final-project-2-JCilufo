import Card from './card'

export default function SpeciesGrid({ species }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {species.map((species) => (
        <Card species={species} key={species.id} />
      ))}
    </div>
  )
}
