import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'
import { categories } from '../data/categories.js'

const CENTER = [34.004, 36.204]
const colour = {
  'ancient-sites': '#b0662f',
  eat: '#7a3f52',
  stay: '#3f5a7a',
  'hidden-gems': '#4f7a4a',
  free: '#c28a2c',
  essentials: '#a03030',
}

/** OpenStreetMap map with one round pin per place. Places with no known coordinates are skipped. */
export default function PlaceMap({ places, height = 420, zoom = 15, center }) {
  const pinned = places.filter((p) => p.lat != null)
  const c = center ?? (pinned.length === 1 ? [pinned[0].lat, pinned[0].lng] : CENTER)

  return (
    <div className="map" style={{ height }}>
      <MapContainer center={c} zoom={zoom} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pinned.map((p) => (
          <CircleMarker key={p.slug} center={[p.lat, p.lng]} radius={9}
            pathOptions={{ color: '#fff', weight: 2, fillColor: colour[p.category], fillOpacity: 1 }}>
            <Popup>
              <strong>{p.name}</strong><br />
              <span>{categories.find((x) => x.slug === p.category)?.name}</span>
              {p.approx && <><br /><em>Approximate location</em></>}
              <br /><Link to={`/place/${p.slug}`}>Open →</Link>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  )
}

export { colour as categoryColour }
