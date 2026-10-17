// Practical information shown on the Essentials page and summarised on the home page.
export const emergency = [
  { label: 'Police (ISF)', number: '112' },
  { label: 'Lebanese Red Cross ambulance', number: '140' },
  { label: 'Civil Defence', number: '125' },
  { label: 'Fire brigade', number: '175' },
]

export function EmergencyNumbers() {
  return (
    <section className="info-block" aria-labelledby="sos-title">
      <h2 id="sos-title" className="info-block__title">Emergency numbers</h2>
      <ul className="sos">
        {emergency.map((e) => (
          <li key={e.number}>
            <a href={`tel:${e.number}`} className="sos__num">{e.number}</a>
            <span>{e.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function GettingHere() {
  return (
    <section className="info-block" aria-labelledby="getting-title">
      <h2 id="getting-title" className="info-block__title">Getting here from Beirut</h2>
      <p className="info-block__lede">Baalbek is about 85 km from Beirut, across Mount Lebanon into the Bekaa Valley.</p>
      <dl className="ways">
        <div><dt>Shared minivan</dt><dd>Leave from the Cola station in Beirut and change in Chtaura. Cheapest option, about 1.5 to 3 hours depending on traffic.</dd></div>
        <div><dt>Taxi or private driver</dt><dd>About 1.5 to 2.5 hours. Agree on the price before you leave.</dd></div>
        <div><dt>Day tour</dt><dd>Many tours from Beirut combine Baalbek with Anjar and the Ksara winery.</dd></div>
      </dl>
      <p className="note">Prices change often in Lebanon, so confirm fares on the day. Avoid the mountain road after dark.</p>
    </section>
  )
}

export function BeforeYouGo() {
  return (
    <section className="info-block info-block--alert" aria-labelledby="before-title">
      <h2 id="before-title" className="info-block__title">Before you go</h2>
      <ul className="checks">
        <li>Check your government's current travel advice for Lebanon and the Bekaa Valley. Conditions can change quickly.</li>
        <li>Carry your passport: there are army checkpoints on the road.</li>
        <li>Dress modestly, with shoulders and knees covered, especially at mosques and shrines.</li>
        <li>US dollars and Lebanese pounds are both widely accepted. Bring cash.</li>
        <li>Many shops and bakeries close on Fridays.</li>
        <li>Best seasons: spring (April–June) and autumn (September–November). Summer can reach 35 °C.</li>
      </ul>
    </section>
  )
}
