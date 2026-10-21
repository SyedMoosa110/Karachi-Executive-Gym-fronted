export const PHONE='923129090455'
export const wa=(t:string)=>`https://wa.me/${PHONE}?text=${encodeURIComponent(t)}`
export const img=(id:string,w=1400)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`
export const IMG={hero:'photo-1534438327276-14e5300c3a48',iron:'photo-1517836357463-d25dfeac3438',rack:'photo-1571902943202-507ec2618e8f',
 ladies:'photo-1518611012118-696072aa579a',ladies2:'photo-1576678927484-cc907957088c',cardio:'photo-1540497077202-7c8a3999166f',
 cable:'photo-1593079831268-3381b0db4a77',interior:'photo-1558611848-73f7eb4001a1'}
export type Mode='gents'|'ladies'
export const MODES={
 gents:{label:'Gents High-Intensity Zone',title:'Forged in iron.',sub:'Power racks, plate-loaded stations and heavy dumbbell rows built for hypertrophy and raw strength.',
  hero:IMG.iron,gallery:[IMG.rack,IMG.cable,IMG.iron],
  points:['Olympic power racks & platforms','Dumbbell rack to executive weights','Hypertrophy & strength coaching','High-intensity evening slots'],
  coaches:[{name:'Head Strength Coach',role:'Powerlifting & hypertrophy',cert:'Certified Strength Trainer'},{name:'Performance Coach',role:'Conditioning & fat loss',cert:'Certified Personal Trainer'},{name:'Transformation Coach',role:'Body recomposition',cert:'Certified Personal Trainer'}]},
 ladies:{label:'Ladies Dedicated Private Floor',title:'Your floor. Your rules.',sub:'A 100% private floor behind frosted privacy doors, with female-only coaching, posture work, cardio and toning.',
  hero:IMG.ladies,gallery:[IMG.ladies2,IMG.ladies,IMG.cardio],
  points:['100% private floor access','Frosted privacy partitions & doors','Female certified trainers only','Posture, cardio & toning routines'],
  coaches:[{name:'Coach Minhal',role:'Lead Female Trainer',cert:'Certified Female Fitness Instructor',featured:true},{name:'Toning Instructor',role:'Cardio & toning',cert:'Certified Instructor'},{name:'Posture Instructor',role:'Mobility & posture',cert:'Certified Instructor'}]}}
export const FACILITIES=[
 {t:'Heavy Resistance',img:IMG.cable,d:'Cable crossovers, plate-loaded leg press, Olympic squat racks.',spec:['Chest · Back · Legs','Plate-loaded','Multi-station']},
 {t:'Cardio Suite',img:IMG.cardio,d:'Treadmills, air bikes and rowers for every tempo.',spec:['Heart-rate telemetry','Incline to 15%','Low-impact options']},
 {t:'Free Weights',img:IMG.rack,d:'Dumbbells up to executive limits with specialised benches.',spec:['Full-body','Adjustable benches','Heavy-range dumbbells']},
 {t:'Climate Control',img:IMG.interior,d:'Fully air-conditioned with high-CFM ventilation and air filtration.',spec:['Full A/C','High-CFM airflow','Filtered air']}]
export const TIERS=[
 {n:'Monthly Executive',cycle:'Recurring monthly',who:'Flexible professionals',f:['Full floor access','Locker & locker room','General trainer support'],cta:'Join Monthly'},
 {n:'Quarterly Elite',cycle:'3 months pre-paid',who:'Committed athletes',f:['All Monthly perks','Customised workout plan','2× trainer consults'],cta:'Join Quarterly',hot:true},
 {n:'Annual VIP Pass',cycle:'12 months pre-paid',who:'Long-term executives',f:['Full access','Free guest passes','Dedicated locker','VIP support'],cta:'Join VIP Annual'}]
export const REVIEWS=[
 {n:'Verified Member',s:'Google',t:'Cleanest equipment in Gulshan. The staff actually correct your form.'},
 {n:'Verified Member',s:'BookMySpot',t:'The private ladies floor is a game changer. Finally comfortable to train.'},
 {n:'Verified Member',s:'Google',t:'Heavy iron, great AC, open till midnight. Perfect for after work.'},
 {n:'Verified Member',s:'Google',t:'Lost 12 kg in 4 months with my coach. Highly recommend.'},
 {n:'Verified Member',s:'BookMySpot',t:'Premium vibe without the premium-city price attitude.'}]
