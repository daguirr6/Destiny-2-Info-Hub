/* lore.js
   Expand ONLY the Ancient Past era into a transcript view with a sticky YouTube video.
*/
document.addEventListener('DOMContentLoaded', () => {
  // minimal styles for the detail view
  const style = document.createElement('style');
  style.textContent = `
    .fade-out{opacity:0;transition:opacity 300ms ease}
    .hidden{display:none!important}
    #ancient-detail{margin-top:2rem;display:none;opacity:0;transition:opacity 250ms ease}
    #ancient-detail.show{display:block;opacity:1}
    #ancient-detail .detail-grid{display:grid;grid-template-columns:360px 1fr;gap:2rem;align-items:start}
    #ancient-detail .video-col{position:sticky;top:1rem;align-self:start;max-height:calc(100vh - 2rem);overflow:hidden}
    #ancient-detail iframe{width:100%;aspect-ratio:16/9;border:2px solid #444;border-radius:8px;background:#000}
    #ancient-detail h2{margin:0 0 1rem 0;color:#6a994e}
    #ancient-detail .chapter{background:#2b2c2f;border-radius:10px;padding:1.25rem 1.5rem;box-shadow:0 0 10px rgba(0,0,0,.25);margin-bottom:1.5rem;line-height:1.6;color:#bbb;white-space:pre-wrap}
    #ancient-detail .chapter h3{margin:0 0 .75rem 0;color:#f0f0f0}
    #back-to-timeline{margin:2rem 0 0 0;padding:10px 20px;background:#2b2c2f;border:2px solid #555;border-radius:6px;color:#fff;font-size:1rem;cursor:pointer;transition:background .2s ease,transform .2s ease}
    #back-to-timeline:hover{background:#3a3c40;transform:scale(1.03)}
    @media (max-width:900px){
      #ancient-detail .detail-grid{grid-template-columns:1fr}
      #ancient-detail .video-col{position:static;max-height:none}
    }
  `;
  document.head.appendChild(style);

  const timeline = document.querySelector('.lore-timeline');
  if (!timeline) return;

  const eras = Array.from(timeline.querySelectorAll('.lore-era'));
  const ancientEra = eras.find(e => (e.querySelector('h2')?.textContent || '').trim().toLowerCase() === 'ancient past');
  if (!ancientEra) return;

  const readMoreLink = ancientEra.querySelector('.lore-entry a');
  if (!readMoreLink) return;

  // YouTube setup (your link)
  const YT_ID = 'MmFFvvn3gcI';
  const YT_SRC = `https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`;

  // build the detail view in memory
  const detail = document.createElement('section');
  detail.id = 'ancient-detail';
  detail.innerHTML = `
    <div class="detail-grid">
      <aside class="video-col">
        <iframe id="ancient-video" src="" title="Ancient Past" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </aside>
      <div class="text-col">
        <h2>Ancient Past — Transcript</h2>

        <article class="chapter" id="chapter-first-knife">
          <h3>The First Knife</h3>
          <p></p>
        </article>

        <article class="chapter" id="chapter-lubraes-ruin">
          <h3>Lubrae’s Ruin</h3>
          <p></p>
        </article>

        <article class="chapter" id="chapter-fundament">
          <h3>Fundament</h3>
          <p></p>
        </article>

        <button id="back-to-timeline">Back to timeline</button>
      </div>
    </div>
  `;

  // transcript text (as provided)
  const TRANSCRIPT = {
    firstKnife: `The beginning is of course where we should begin, but what truly happened at the beginning of our story is the subject of much debate. Legends and myths of old tell us of how there was a place before time and the universe, known as "The Garden". Within this Garden there stood a Tree of Silver Wings and vast Meadows of potential and metaphor. Within the Grove there were two figures.

First there was a gardener, who during the long days would seed life in rapturous celebration. Throughout the Garden this life would grow and bloom into many wild forms... Until at the fall of dusk, The Winnower came and with a scything blade cut away the chaff from the wheat. The Gardener and The Winnower are rumoured to have existed in this cycle for untold eons, until The Gardener grew dissatisfied with it, believing it to have grown repetitive and unremarkable.

Across this game of existence that The Gardener and The Winnower played, a single repetitive pattern always emerged. It was always the winning play. A final shape that defined the form of victory. The Gardener insisted that there should be a new rule that allowed for new complexity to also find success.

The Winnower disagreed, stating that from this idea unnecessary suffering would be born. From this disagreement, conflict brewed between The Gardener and The Winnower. Their conflict brought about the creation of the universe, and The Garden fell into ruin. The Gardener and The Winnower fought and brought down the Tree of Silver Wings and left its stump to smoke amid the meadows.

If rumours are to be believed, this conflict also brought about the escape of primal patterns that survived and took root in the universe with an aim of survival at all costs. These were known as The Vex and though you might know them by their brass frames, they are actually the tiniest of molecular life built into a connected consensus—Radiolarian structures creating grand designs.

This story of The Gardener and Winnower and their conflict was told to us through some of our first interactions with The Black Fleet—the great Pyramid Vessels of our most ancient enemy. It gives us some of our only potential ideas about what occurred at the start of the universe. Whether this story is true or not is still debated to this day, but what is not debated is that the primal forces that The Gardener and Winnower supposedly aligned with are very real.

The Gardener seemingly was aligned with the Light, a power associated with the physical universe, creation, and chaos. Matter, Gravity, Energy. The Winnower seemed to be aligned with the Darkness, which is associated with control and the domain of the mind—one's will, dreams, and nightmares.

These powers of The Light and The Dark are known to supersede the typical laws of the universe, bending and breaking those laws of physics and matter on the whims of those that use these powers. They sidestep causality, and for these reasons individuals who wield the light and dark are referred to as paracausal.

We may not know whether the light and dark truly originated with the mythical Gardener and Winnower, but we do know that these powers are found in the universe in a pair of ancient presences—entities of a sort. They are the Traveler, which is a source of the light, and the Veil, which is a source of the darkness.`,
    lubraesRuin: `[Music]
After the Traveler had left the precursor people to their fate, it enacted a pattern that it would follow for eons to come. It would move onward and find another civilization to uplift. This cycle has been repeated countless times.

And as best we know it, in the Traveler's wake, the Witness has always followed—meaning that wherever the Traveler has found itself, eventually, calamity and ruin would follow.

Over the course of its journey, the Traveler would arrive at a world orbiting a binary star called Lubrae. It had blessed the Lubrean people with the bounty of the Light, and they would also grow and rise in much the same way as the precursor civilization had.

The Lubrean civilization would be split in two by this action. There were those who lived beneath the Traveler, forming a harsh regime that would rule the planet. This regime would send out its killers that hunted traditional tribal peoples and suppressed them.

Those that lived free of this regime had to contend with the two harsh suns of Lubrae and with the terrifying fauna that called the planet home.

By the time the Traveler had left the Lubreans, the division in their society had become a wound that would never heal—a scar upon their people that governed their entire way of life, be they of the regime or of the tribes.

Savagery ruled this world, a savagery that would be its undoing.

For it was into this world and these savage peoples that Rhulk was born. Though he was originally born into the tribal nomadic society, Rhulk's parents had come from the regime’s city.

As Rhulk grew up, he saw how the regime’s sanctioned killers—known as Stalkers—hunted those from the tribal peoples and seemingly spared none in their quest for blood.

There was only one who was bloodier than the Stalkers, though, and that was his father, Relic. Born of the regime’s savagery, Relic would return the Stalkers’ malice to them and defended his newfound people by bathing in the Stalkers’ own bloody viscera as he tore them in two.

But Relic’s family did not approve of such savagery. Eventually, they would be his moderating influence, and he would be drawn away from such acts of gratuitous violence by the family he had chosen.

But for his son Rhulk, these actions were not the mark of a villain. They were simply what was necessary to survive.

With his father’s example driving him, Rhulk developed a sadistic streak and followed his father’s footsteps into violence. By the time he had killed his first Stalker, Rhulk would see his father being carried away by a raiding band of the regime’s killers.

In his father’s name, he swore vengeance.

He hunted the Stalkers through the darkened wastes of his home world, seeking vengeance for his father, Relic. He took a glaive from one of the Stalkers and called it Relic’s Sword.

It was his objective—he would defend his father just like his father would have defended him.

But by the time Rhulk discovered what had truly happened, his realization would change the name of his glaive.

For his father’s betrayal was written upon the robes he wore—he now wore the colors of the regime and the Stalkers.

Rhulk was carried away by the Stalkers to the regime’s city. He would have died there, but his father spoke on his behalf and told the regime authorities that Rhulk would join the Stalkers, for he was a mighty killer.

And Rhulk would do so.

Because at least among the ranks of these killers, there was a degree of honesty. Despite his years of battling against them, the regime may have been harsh, but nobody lied about who they were—unlike his father.

And thus, the glaive that he had stolen from a Stalker had its name changed from Relic’s Ward to Relic’s Bane.

Most importantly for Rhulk, he was able to freely enjoy the bloodlust that his father had sated long ago.

One day, his father left the city to search for the family that he had left behind. Relic intended to smuggle them into the city proper so that they might finally live in peace.

But in order to reach the city, they would need to cross an abyss over a narrow bridge—a scar across all of Lubrae, much like their society had been cleft in two.

On the other side of this narrow bridge, through the single choke point they needed to pass, Rhulk was standing. And he intended to end his father.

But curiously enough, Rhulk was momentarily swayed from violence.

His mother and father apologized. They apologized for Rhulk’s exile when he had followed his father’s violence. For the poor example his father had set long ago.

For the inaction he had taken—for not telling him more—for not telling him how the regime’s actions could be seen as cruel. And why he had chosen to save his family.

Now, for but a moment, it seemed as though Rhulk’s family might find peace at last. Perhaps if things had proceeded differently, Rhulk might have also found peace and reconciliation alongside his family. And they might have lived out the days that they had left in the city in some measure of harmony.

But—for one reason or another—Rhulk fell into the abyss.

Did he fall of his own accord? Was he pushed? Did he trip? Was something else there to pull him down?

The circumstances are not clear.

But what is clear is this:

When Rhulk looked up at the faces of the family that he was slowly falling away from, he did not see sorrow or heartbreak or pain.

As he fell, in their faces, he realized something else was written.

They were relieved.

This was the betrayal that would define Rhulk.

It showed him the truth of the universe.

It showed him that there was no place for weakness—or the petty lies that held society together.

Deep in the abyss, he would at last discover truth.

How long Rhulk fell for isn't known.

But when he finally landed in this dismal swamp at the base of the abyss, he was not alone.

There were myriad creatures moving to consume his very body, broken as it was.

But it was here as well that Rhulk beheld something else.

For the first time, he laid eyes upon the Witness.

It saw Rhulk for what he was—a thing of hatred, ready to bring ruin to those liars above.

The Witness mended his body and his broken engram glaive.

It empowered Rhulk with terrible Darkness—and with an ability known only as the Witness’s Luster, something we still do not understand fully to this day.

When Rhulk asked what he was meant to do, the only word the Witness uttered was:

“Ruin.”`,
    fundament: `[Music]

With his newfound purpose, Rhulk would slaughter countless civilizations in the name of the Witness—in the name of its great final purpose.

The greatest conquest of the First Disciple and his dark master would take place on a distant gas giant called Fundament.

A world with 52 moons, and whose gravity was so great that smaller planetoids had been pulled in by its gravity, collided with its surface, collapsing into its oceans and becoming great continents.

On this world, the Witness and its First Disciple would feverishly go about the busy work of sowing devastation once more.

The Traveler had settled above Fundament among its moons and was uplifting a civilization there known as the Ammonite.
The Witness foresaw that soon it would move to uplift another species on the world below—on Fundament itself.
They were the Krill.

All the while, there were even greater forms of life here—Leviathan creatures that dwelled within the oceans.

These Leviathans were the first of the Witness's targets.
It came to them and offered them powers nestled within Darkness.
In those powers lay a truth and purpose so terrible that it would haunt the very shape of existence.

With its promises of death, the Witness offered them the Logic of the Sword:
The truth that nothing has ever lived that will not one day die—
and the attached premise that those who are strong enough to exist will go on existing by the right of the sword alone.

But this was not mere philosophy.

It was a practice that led to real power—
Curses and magics wreathed in the Darkness itself would be derived from the Sword Logic.

In time, the Leviathans would be twisted into new forms if they followed this dark power.
But even before those that consumed of these magics turned into the great ravenous worms that we know of now,
their people had been cleft in two, and war was soon to break out.

The war between the Leviathans and the traitors that would one day become the Worms was brutal and vicious.

Fundament’s oceans roiled with blood—
as father and mother fought, brother and sister fought, son and daughter.

It was a roiling carnage that engulfed an entire people and left few survivors.

One was a great creature known as Assa.
She managed to escape her people's fate by sinking into an ascendant dream—
Seemingly, this means she used the Ascendant Plane to escape—
a parallel reality to our own that mirrors it in a darker, more changeable form to those that have strong will.

She would pass through ascendant dreams until she returned to the physical universe
and landed in the oceans of a distant system called Sol.

She would carry with her the knowledge of who the Witness had been,
what it had become, and what it intended for the universe.

Her eyes were wide, and her gaze was long.

She would spy the war across the stars
and would understand the shape of fate
and how it needed to progress if we were to stop the oncoming calamity.

But the battle back on Fundament continued to rage.

When the Worms were at an end, there were but a handful that remained—
a mother known as Xita, and her five offspring: Yul, Zol, Ur, Eir, and Akka.

They had embraced the way of the Sword Logic as was described by the Witness,
and they were imprisoned in the Deep.

There, a Leviathan watched over them,
holding them in Fundament's crushing core.

It isn’t clear if this creature who imprisoned them was of the same species as Assa
and what the Worms had once been.

It might well have been—
and if so, it might well have been the last of the survivors of that great war—
the last who rejected the Witness’s offer.

We simply do not know.

But what we do know is that its power was great enough that it could dominate the remaining Worms.
It spanned the supposed size of continents and was known to all others simply as The Leviathan.

With the Worms' numbers diminished, Rhulk and the Witness would enact the next stage of their plan: Subjugation.

Rhulk would dive into the Deep and enlist the Worms in servitude to the Witness’s plan.

He effortlessly conquered the Leviathan, which addressed him and demanded that he stop.
Rhulk responded by removing one of its ribs in a display of dominance.

Descending into the Deep, he spoke to Xita, the mother of the Worms, and offered her a dark pact.

The Witness had need of her power and her children’s power.
It would offer her children sustenance and survival in exchange for loyalty.

Having few other options, and seeing the scope of Rhulk’s power, it was clear this was no bargain—
it was a demand.

And so, Xita accepted.

Thus, as he took their mother to the surface—both a source of power and a captive—
the newly anointed children of Xita, the so-called Worm Gods, named him:

The Subjugator.

Rhulk took portions of the Worms that would form into their larvae—
the small Worms that we now know from killing so many Hive—
and with them, he enacted the greatest of the Witness’s plans.

He left one larva in Fundament’s oceans, ensuring that it would wash up
and be found by a leader of one of the Krill nations—
the next people that the Traveler was meant to uplift.

The leader who discovered the Worm larva was the king of the Osmium Dynasty.

This dead Worm larva would quickly become his familiar,
for it would whisper the Witness’s terrible lies to him—
lies of an oncoming horrific calamity.

The old Osmium King would grow obsessed with this doom,
which would supposedly come in the form of a great god wave that would wipe away all things.

He neglected all other things in pursuit of this truth,
even neglecting his three children—
whose now dead names Aurash, Sathona, and Xi Ro would be spoken only in apocrypha.

But whose true ascendant names would one day go on to bring terror to the universe.

Only the eldest sibling, Aurash, had his attention—
and only when the two of them were studying the stars for proof of the approaching doom.

The Witness’s plans for these siblings was thus:
The most cunning of them would acquire her father’s larva upon his death.

It would whisper to her of the same cataclysm written in the stars
and would tell her that to find salvation for her people,
she would need to descend into the Deep.

These were the whispers told by the lying Worm to Sathona—
a simple lie,
but one that would reshape the history of her people forever.

All came to pass as the Witness planned.

And in time, the siblings dove down into the Deep.

There, Sathona’s older sibling Aurash stood within the deepest part of Fundament’s core
and made a pact with the Worm Gods—Xita’s five children.

If the Krill would consume their larvae,
the Worms would provide them with power and immortality—
immortality that they had long sought,
an escape to their short lives,
and the power to claim their revenge.

In exchange, the siblings—and any who consumed the larvae of the Worms—
would provide an eternal blood tithe and forever venerate the Worm, their God.

The Krill would forever have to commit acts of violence and devastation
by following their nature.

If they failed to do so,
their Worms would consume them,
and they would perish.

The bargain was accepted.

And thus, Aurash, Sathona, and Xi Ro ceased to be.

Thus, Oryx, Savathûn, and Xivu Arath were born.

Together, these three siblings would stand with the power of Xita’s five Worm God children.

They would be claimed by the Witness’s powers
before the Traveler had a chance to uplift them.

Thus, the Traveler’s plans were subverted.

Oryx, Savathûn, and Xivu Arath would go on to unite the Krill peoples,
now believing in the Sword Logic of the Worms and the promise of their own power.

After cleansing the surface of Fundament,
they would go on to scour its moons—
destroying the Ammonite and butchering the Leviathan.

All in the name of their newfound gods.

A change came upon them as a people,
and they would no longer be known as the Krill.

As their new purpose of being the great winnowing blade was made clear,
they would become known forevermore as:

The Hive.

These would be some of the most fanatical servants of the Sword Logic.
They would spread out across the universe.

And beneath their blades,
the Witness would see yet more worlds burn in pursuit of the Traveler—
though they would not necessarily know the Witness to be their true master.

The Hive would serve their purposes nonetheless—
tools, puppets created by Rhulk.

But the Hive are a tale unto themselves.

In their long and storied history,
kings and queens and princes would rise and fall.
Power would be gained, lost, and forsaken.

But always—at the heart of all their machinations—
there would be a link to each of the three new Hive gods:

Oryx, the Navigator and King of Shapes.
Savathûn, the Queen of Lies and Deception.
And Xivu Arath—the Hive god of war.

They would leave Fundament behind and look for new killing fields—
and new killing logics.

[Music]`
  };

  // put transcript into the DOM
  detail.querySelector('#chapter-first-knife p').textContent = TRANSCRIPT.firstKnife;
  detail.querySelector('#chapter-lubraes-ruin p').textContent = TRANSCRIPT.lubraesRuin;
  detail.querySelector('#chapter-fundament p').textContent = TRANSCRIPT.fundament;

  // click handler (Ancient Past only)
  readMoreLink.addEventListener('click', (e) => {
    e.preventDefault();

    eras.forEach(era => { if (era !== ancientEra) era.classList.add('fade-out'); });

    setTimeout(() => {
      eras.forEach(era => { if (era !== ancientEra) era.classList.add('hidden'); });
      ancientEra.classList.add('hidden');

      // mount detail
      timeline.insertAdjacentElement('afterend', detail);

      requestAnimationFrame(() => detail.classList.add('show'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  });

  // back button
  detail.addEventListener('click', (e) => {
    if (e.target?.id === 'back-to-timeline') {
      // stop video (clear src), then remove the view
      const iframe = detail.querySelector('#ancient-video');
      if (iframe) iframe.src = '';

      detail.classList.remove('show');
      setTimeout(() => detail.remove(), 250);

      eras.forEach(era => era.classList.remove('hidden', 'fade-out'));
      ancientEra.classList.remove('hidden');
      ancientEra.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
