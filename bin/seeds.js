const mongoose = require("mongoose");

const Drug = require("../models/drug.model");
const DB_NAME = 'drugsdb';


mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const drugs = [{

        name: 'Ecstasy',
        look: 'Ecstasy comes in pill or powder form. When it’s a powder it’s called by its chemical name, MDMA, but it’s the same drug as ecstasy. Ecstasy pills can be white, coloured, round, square or pressed into any shape. Some pills have designs stamped into them, like well known company logos that the pills are then named after. Ecstasy powder looks like white/grey crystals and is called MDMA, mandy or MD.',
        method: 'Ecstasy pills: Ecstasy pills are usually swallowed, although some people crush them up and snort them. The amount of MDMA in ecstasy pills varies massively. Some pills sold as ecstasy actually contain other, more dangerous, drugs that take longer to kick in. For this reason, you should never take a whole pill in one go, even if you’ve taken ecstasy before. Drinking too much (including water) can also be dangerous. Users should sip no more than a pint of water or non-alcoholic drink every hour. MDMA powder: People usually take MDMA powder by dabbing it onto their gums or by swallowing it wrapped in a cigarette paper, which is sometimes called ‘bombing’. MDMA users often start by dabbing just a small amount of powder and waiting for the effects to kick in. Like with pills, drinking too much (including water) can also be dangerous. Users should sip no more than a pint of water or non-alcoholic drink every hour.',
        effect: 'Most people feel very happy – hence the name ‘loved up’ – users often feel love and affection for the people they are with and the strangers around them energised and alert Ecstasy can also make people feel more in tune with their surroundings and like the music is more intense, which is why people sometimes take it in nightclubs and at parties. Some users have reported feelings of: anxiety panic attacks confused episodes paranoia and even psychosis after taking ecstasy How does it make people behave? Lots of people feel very chatty and uninhibited on ecstasy, which makes them open up and talk about things they might not do normally. Physical side effects can include: dilated pupils tingling sensations tightening or moving of the jaw muscles (gurning) raised body temperature a faster heartbeat and nausea',
        duration: 'How long the effects last and the drug stays in your system depends on how much you’ve taken, your size, whether you’ve eaten and what other drugs you may have also taken. To kick in: When taken orally, ecstasy normally takes 30 minutes to kick in, but it could take as little as 20 minutes, or it may take over an hour or more. Some other (more dangerous) drugs sold as ecstasy take longer to kick in. How long it lasts: Users tend to feel high for 2 to 4 hours. You might still experience some physical effects, like a fast heart beat or insomnia (not being able to sleep), for a few hours after you stop feeling high – especially if you take a lot.',
        mixing: 'Yes, any time you mix drugs together you take on new risks. Things that affect your risk include the type of drug, the strength and how much you take.',
        addiction: 'It is possible to build up tolerance to ecstasy, which means people need to take more of the drug to get the same buzz. You may also develop a psychological dependence, which is a strong desire to keep on using even if you think your use is having harmful consequences.',
        price: '3',
        image: 'https://i.ibb.co/6XLW93C/ecstasy.jpg',
        video: 'https://www.youtube.com/embed/TxSnUMfgAUI',
        alsoCalled: ['Dizzle', 'Superman', 'Molly', 'Beans', 'Mitsubishis']


    },
    {
        name: 'PMA',
        look: 'PMA is sometimes sold as ecstasy. However, PMA is more poisonous and can kill at lower doses than MDMA. Also like MDMA, it can cause a fatal rise in body temperature.',
        method: 'PMA pills are usually swallowed, although some people crush them up and snort them.',
        effect: 'Most people feel very happy – hence the name ‘loved up’ – users often feel love and affection for the people they are with and the strangers around them energised and alert',
        duration: 'How long the effects last and the drug stays in your system depends on how much you’ve taken, your size, whether you’ve eaten and what other drugs you may have also taken. To kick in: When taken orally, ecstasy normally takes 30 minutes to kick in, but it could take as little as 20 minutes, or it may take over an hour or more. Some other (more dangerous) drugs sold as ecstasy take longer to kick in. How long it lasts: Users tend to feel high for 2 to 4 hours. You might still experience some physical effects, like a fast heart beat or insomnia (not being able to sleep), for a few hours after you stop feeling high – especially if you take a lot.',
        mixing: 'Mixing PMA with alcohol can have serious consequences – the effects of PMA are increased, making it more likely to experience its negative effects.',
        addiction: 'PMA is very addictive',
        price: '40',
        image: 'https://i.ibb.co/sw9gdWH/PMA.jpg',
        video: 'https://www.youtube.com/embed/nP6zYIdyIrA',
        alsoCalled: ['Red Mitsubishi', 'Pmma', 'Pink Mcdonalds', 'Pink Ecstasy', 'Mitsubishi Turbo', 'Killer', 'Dr Death', 'Double Stacked', 'Chicken Yellow', 'Chicken Fever']
    },

    {
        name: 'Benzodiazepines',
        look: 'They come as tablets, capsules or injections; and come in a wide variety of colours.  Commonly available street benzos include alprazolam (Xanax), flunitrazepam (Rohypnol), diazepam (Valium), temazepam and phenazepam.  Flubromazolam and etizolam are newer benzodiazepine analogues which are chemically very similar to benzodiazepines and can be dangerously high in potency.  Benzodiazepines can be prescribed medicines, which may have been transferred away from the person who was prescribed them, or illicit or fake products. The benzodiazepines (and other drugs) in illicit or fake products and their dose vary between samples.',
        method: 'Benzodiazepines come as tablets, capsules or suppositories (tablets inserted up the bum).  Some people crush tablets to inject them. This is extremely dangerous and can lead to skin infections and abscesses and rapid, potentially fatal, overdose.',
        effect: 'Benzodiazepines are prescribed to treat anxiety and severe insomnia. They depress the nervous system and slow the brain and body down.  Benzodiazepines are often used as chill-out drugs after parties, to help people sleep after taking stimulants. Some people use them to help come down off acid, cocaine, speed or ecstasy after a big night out.',
        duration: 'How long the effects last and the drug stays in your system depends on how much you’ve taken.',
        mixing: 'Mixing Benzodiazepines with alcohol can have serious consequences',
        addiction: 'Benzodiazepines can cause psychological and physical addiction and, because tolerance increases over time, users may have to keep increasing their dose either to get the same hit, or just to maintain the initial positive medical effect on their anxiety or insomnia.  It is because of the risk of dependence (and because they don’t work as well long-term) that benzodiazepines are normally recommended to be only used for short periods of time and only for severe cases.  Withdrawal can cause unpleasant symptoms like a pounding headache, nausea, anxiety and confusion. Some people report having withdrawal symptoms after using benzodiazepines for a relatively short time (for example, a few weeks).',
        price: '20',
        image: 'https://i.ibb.co/HVXs4k0/Benzodiazepines.jpg',
        video: 'https://www.youtube.com/embed/l53VAAU4akQ',
        alsoCalled: ['Alprazolam', 'Benzos', 'Blues', 'Diazepam', 'Downers', 'Etizolam', 'Rohypnol', 'Roofies', 'Temazepam', 'Valium', 'Vallies', 'Xanax']
    },
    {
        name: 'LSD',
        look: 'LSD is usually sold as small squares of paper with pictures on them, known as tabs or blotters.  LSD can also be sold as a liquid or as tiny pellets, known as micro dots.  ',
        method: 'By swallowing it if it’s a tab or a pellet (micro dot) By dropping it onto the tongue if it’s liquid By dropping it onto food or into a drink if it’s liquid LSD stands for its chemical name, lysergic acid diethylamide, and is commonly called acid.  It`s a powerful hallucinogenic drug, which means you’re likely to experience a distorted view of objects and reality if you take it. The experience of taking LSD is called tripping.  LSD trips can last several hours and can be very intense. Trips are often described as ‘good’ or ‘bad’ depending on whether the experience was enjoyable or distressing.  When you take LSD, there’s no way of knowing how you might feel or what kind of trip you’re going to go on. And once you start tripping it’s difficult to control the effects.  LSD can also be taken in very small amounts, and this is sometimes called micro-dosing.',
        effect: 'For most people, the world appears distorted when they take LSD. Colours, sounds, objects and even time can all seem very strange and disturbing.  Taking LSD can make you feel:  euphoric giggly in awe of the people and things around you energised excited empathetic It can also make you:  see and hear things that aren’t there (hallucinate) confused suspicious anxious panicked frightened overwhelmed LSD feeds off your imagination so every person’s experience is unique.  How the trip goes will be affected by how much you take, your surroundings, who you’re with and how comfortable you are with them, as well as by your mood.  If you’re in a bad mood, feeling worried or depressed, the LSD might make those feelings worse.',
        duration: 'How long the effects last and the drug stays in your system depends on how much you’ve taken, your size, whether you’ve eaten and what other drugs you may have also taken.  To kick in Acid can take from 20 minutes to two hours to take effect, but it really depends on how much the user takes.  If you feel that you’re having, or are going to have, a bad trip, let your friends know and get their help. Go to a nice, quiet spot where you feel safe and can relax. ',
        mixing: ' Everytime you mix drugs you take on new risks. However, some drugs are more dangerous to mix with LSD than others.',
        addiction: 'There is no evidence to suggest that LSD is addictive, but you can become tolerant to its effects. This means you need to take more of it to get the same effect as before.  ',
        price: '68',
        image: 'https://i.ibb.co/tskg0jv/LSD.jpg',
        video: 'https://www.youtube.com/embed/kvalFfavNpU',
        alsoCalled: ['Dizzle', 'Superman', 'Molly', 'Beans', 'Mitsubishis']
    },
    {
        name: 'cocaine',
        look: 'There are three types of cocaine: coke, crack and freebase.  Coke looks like a fine white powder Crack looks like small lumps or rocks Freebase looks like a crystallised powder',
        method: 'By snorting it as a powder Most people snort cocaine – they crush it into a fine powder, divide it into lines and snort it through the nose. This is the most common way to take cocaine.  Snorting cocaine can damage your nose, especially if it’s not been chopped very finely. Some people find that switching between nostrils helps, and some people rinse out their nostrils with water or saline solution after taking it.  By smoking it as crack or freebase Crack or freebase can be smoked through a glass pipe, tube, plastic bottle or in foil, but this is less common.  By injecting it Powdered coke and crack can be prepared to make a solution for injecting, which is much more dangerous than snorting or smoking cocaine.',
        effect: 'Taking cocaine can make you feel:  happy excited wide awake confident on top of your game It can also:  make your heart beat faster raise your body temperature – so you feel hot stop you feeling hungry make you feel sick make you need to poo make you anxious and panicky make you paranoid make you so confident that you do things you wouldn’t normally do (which might be risky)',
        duration: 'The initial high from cocaine doesn’t last that long, around 20 to 30 minutes – although this depends on the purity of the cocaine and the person’s tolerance. You might still experience some physical effects after the high has gone, such as a faster heart beat.  The effects of smoking crack are even shorter lasting, around 10 minutes, with the peak lasting for about two minutes after smoking it.',
        mixing: 'Alcohol and cocaine together can be particularly dangerous, for example. Once they mix together in the body they produce a toxic chemical called cocaethylene.  Cocaethylene stays in the body much longer than cocaine or alcohol alone, and this increases the damage done to the heart and liver.',
        addiction: 'Yes, cocaine is very addictive. This is because regular use changes the way the brain releases dopamine, a brain chemical that makes you feel happy.  Cocaine is mostly known for causing psychological dependence (addiction), but users can sometimes continue to use cocaine just to overcome the negative after effects of using. This can lead to a binge pattern of use and increase the risk of dependence.',
        price: '100',
        image: 'https://i.ibb.co/XZdMk15/cocaine.jpg',
        video: 'https://www.youtube.com/embed/OMMOlj68mnM',
        alsoCalled: ['Blow', 'Coke', 'Crack', 'Charlie ', 'White', 'Wash', 'Toot', 'Flake']
    },
    {
        name: 'codaine',
        look: 'Small white pills or tablets, A syrup – like a cough syrup, A solution – for injecting',
        method: 'Codeine is used to treat mild to moderate pain and diarrhea. People usually swallow it in pills.  On its own, codeine is a prescription-only opiate painkiller. It’s used to treat pain that can’t be stopped by more common painkillers. This means you can’t buy it legally without a prescription.  Small amounts of codeine are sometimes mixed with other medicines – like paracetamol, ibuprofen and aspirin – and these can be bought from a chemist or pharmacy.  Because codeine is highly addictive, medicines that contain it (such as co-codamol) carry warnings on the packs about the risk of addiction. They advise that the person taking the medicine doesn’t take it for more than three days at a time without medical advice.  People who take codeine illegally, or abuse their prescription (don’t take it how they should), sometimes crush up the tablets and snort them.',
        effect: 'Codeine is an opioid medication prescribed to reduce physical pain.  It can cause feelings of relaxation, drowsiness, confusion, nausea, itchiness and constipation, especially if taken in large doses.',
        duration: 'To kick in: It takes around one hour for codeine to take effect.  How long it lasts: Codeine lasts for around 3 to 4 hours depending on the dose taken.  After effects: After taking codeine, a person can feel tired, lethargic and washed out.',
        mixing: 'Codeine is especially dangerous to mix with alcohol, benzodiazepines like diazepam (Valium) and other opioid drugs.',
        addiction: 'Yes, codeine is addictive.  Over time codeine can produce cravings and a psychological desire to keep on using.  Some people get addicted to codeine after being prescribed it to treat physical pain. They can experience withdrawal symptoms if they stop taking the tablets and this can be a reason that people continue taking it or seek codeine illegally.  Tolerance can also build up, so that users have to take more just to get the same effects or to avoid unpleasant withdrawals.  Physical dependence is common in regular users. ',
        price: '50',
        image: 'https://i.ibb.co/cQmHD3G/codaine.jpg',
        video: 'https://www.youtube.com/embed/o1yUKfvnqRQ',
        alsoCalled: ['Syrup', 'Nurofen Plus/Max', 'Cough Syrup', 'Codis500', 'Co-codamol']
    },
    {
        name: 'speed',
        look: 'Speed is the street name for amphetamine sulphate, although it’s sometimes used to refer to other amphetamines.  It’s usually an off-white or pinkish powder and can sometimes look like crystals.  It’s also available in a paste form which is usually white/grey or brown in colour, and can be damp and gritty.',
        method: 'Some people crush it up and snort it Some people dab it onto their gums Some people roll it up in a cigarette paper and swallow it like a capsule, this is called ‘bombing’ It can also be injected (which is particularly dangerous as speed is usually very impure) Some people mix it into their drinks',
        effect: 'Taking speed can make you feel:  alert energised wide awake excited Some people take it because it gives them the energy to do things for hours without getting tired – like dancing and talking.  Speed stops you feeling hungry too, and amphetamines like speed were once the main ingredient in diet pills.  Speed can also make users feel:  agitated panicked Some people have become psychotic and delusional when on speed, which means seeing or hearing things that are not there.',
        duration: 'To kick in Speed takes a few minutes to kick in when snorted. Used orally, it takes between 20 minutes to an hour.  How long it lasts The buzz can last between 3 and 6 hours.',
        mixing: 'Any time you mix drugs together you take on new risks. Things that affect your risk include the type of drug, the strength and how much you take.',
        addiction: 'Speed is an addictive drug.  If you take a lot on a regular basis you can build up a tolerance to the drug so that you need higher doses just to get the same buzz or feel "normal".  Regular users can increasingly take speed to avoid unpleasant withdrawals.',
        price: '60',
        image: 'https://i.ibb.co/MsHfb0k/speed.jpg',
        video: 'https://www.youtube.com/embed/nUDA7sGGEG4',
        alsoCalled: ['Whizz', 'Sulph', 'Paste', 'Billy', 'Base', 'Amphetamine Sulphate', 'Amphetamine']
    },
    {
        name: 'Synthetic cannabinoids',
        look: 'In their pure form, synthetic cannabinoids are either solids or oils. They are then added to dried herbs, vegetable matter or plant cuttings to make a smoking mixture (so that it looks more like real herbal cannabis).  The most commonly known synthetic cannabinoid is Spice.  The smoking mixtures are packaged in small, often colourful sachets with labels describing the contents as incense or herbal smoking mixture, and usually stating "not for human consumption".  There are many different names given to herbal smoking mixtures, some of the most common are listed in the "Also called" section at the top of the page.  There are many different brand names for smoking mixtures, but it is not uncommon for different brands to contain the same synthetic cannabinoids.',
        method: 'Synthetic cannabinoids are normally used in a similar way to cannabis:  They can be mixed with tobacco, rolled up into a spliff or joint, and then smoked.  They can be smoked without tobacco using a pipe or bong.  As e-cigarettes have become more available, there are reports of some people using e-cig technology for synthetic cannabinoids, and that e-liquids containing synthetic cannabinoids have been produced that can be used with normal e-cigs.  They can also be swallowed, eaten with food or made into a drink.',
        effect: 'Feelings of being happy, euphoric and relaxed, with some people gettings the giggles, feeling hunger pangs and becoming very talkative, while others get more drowsy.  Mood and perception can change, and concentration and coordination may become difficult. Synthetic cannabinoids, possibly because of their potency, are more likely to be associated with hallucinations than natural cannabis.  Some will have quite bad reactions, such as paranoia, panic attacks and forgetfulness.',
        duration: 'How long the effects last and the drug stays in your system depends on how much you’ve taken, your size, whether you’ve eaten and what other drugs you may have also taken.',
        mixing: 'Mixing synthetic cannabinoids with alcohol or other drugs can be especially dangerous. It can increase the risks of both drugs and can lead to a greater risk of accidents or death.  Also, because synthetic cannabinoids can overstimulate the serotonin system, it is important to avoid mixing them with antidepressants, such as Prozac, as they both stimulate serotonin activity in the brain, which can lead to serotonin syndrome, causing high fever, rapid pulse, sweating, agitation, confusion, convulsions, organ failure, coma and even death.',
        addiction: 'Research suggests that you can become dependent on synthetic cannabinoids, especially if you use them regularly. Whether or not you’re dependent will be influenced by a number of factors, including how long you have been using it, how much you use and whether you are just more prone to becoming dependent.  If you have used synthetic cannabinoids regularly you could find it difficult to stop using and you might experience psychological and physical withdrawals when you do stop. The withdrawals can include cravings for synthetic cannabinoids, irritability, mood changes, loss of appetite, weight loss, difficulty sleeping and even sweating, shaking and diarrhoea.',
        price: '30',
        image: 'https://i.ibb.co/rtWngfm/Synthetic-cannabinoids.jpg',
        video: 'https://www.youtube.com/embed/jLHuLWggDvg',
        alsoCalled: ['X', 'Tai High Hawaiian Haze', 'Spice', 'Mary Joy', 'Exodus Damnation', 'Ecsess', 'Devil Weed', 'Clockwork Orange', 'Bombay Blue Extreme', 'Blue Cheese', 'Black Mamba', 'Annihilation', 'Amsterdam Gold']
    },
    {
        name: 'Heroin',
        look: 'As it’s cut with different substances, the colour of street heroin in the UK ranges from brownish white to brown.  Heroin is a drug made from morphine, which is extracted from the opium poppy.  Drugs made from opium are called opiates, and are often used as painkillers. Heroin can have a vinegary smell but can also be odourless. It normally has a bitter taste.  ',
        method: 'By smoking it Users heat the heroin on a surface like tin foil and then inhale the smoke – this is sometimes called ‘chasing the dragon’.  By injecting it Heroin can be dissolved in water and then injected, this is very dangerous and can lead to overdose.  By snorting it Heroin can be snorted.',
        effect: 'Heroin is a very strong drug and the first dose of heroin can cause dizziness and vomiting.  People take heroin to feel:  happy relaxed euphoric sleepy ',
        duration: 'To kick in: When smoked, the effects of heroin usually kick in within a few minutes.  How long it lasts: The effects can last for around an hour.  After effects: The after effects of smoking heroin can last for several hours, so it’s important to be careful if you are using any other drugs or alcohol in that time.',
        mixing: 'If heroin is taken with other drugs, including alcohol, an overdose is more likely. Other downers (such as benzodiazepine tranquillisers or methadone), are also linked with deaths from heroin overdose.  So, heroin is particularly dangerous to mix with:  alcohol methadone benzodiazepines (such as Xanax and Valium) [tramadol]',
        addiction: 'Over time, the effects of heroin on the brain can cause cravings and a strong drive to keep on using.  As heroin is used on a regular basis, the body builds up a tolerance, so that users have to start taking more and more.  Doctors have developed a number of effective ways to treat addiction to street heroin. These include using certain safer drugs to replace the street heroin, such as methadone and buprenorphine.  ',
        price: '120',
        image: 'https://i.ibb.co/168J4ZP/Heroin.jpg',
        video: 'https://www.youtube.com/embed/RGvllptSxDQ',
        alsoCalled: ['Smack', 'Skag', 'Horse', 'Gear', 'Brown']
    },
    {
        name: 'Ketamine',
        look: 'A clear liquid, when used in medicine A grainy white or brown crystalline powder when sold on the street Tablets, although this is less common',
        method: 'By snorting it as a powder Most people who take powder ketamine will snort it. Users often talk of taking a ‘bump’, meaning they snort a small amount of ketamine. In the UK, snorting is the most common way to take ketamine.  By injecting it People who regularly use ketamine sometimes inject it to get a bigger hit. They usually inject ketamine into a muscle.  By swallowing it as a tablet Some people swallow it in tablet form, but this is less common.  By bombing Some people ‘bomb’ it, which is swallowing the powder wrapped in a cigarette paper.',
        effect: 'Ketamine is a general anaesthetic so it reduces sensations in the body. Trips can last for a couple of hours.  Taking ketamine can make you feel:  dream-like and detached chilled, relaxed and happy confused and nauseated Ketamine can also:  alter your perception of time and space and make you hallucinate (see or hear things that are not there) stop you feeling pain, putting you at risk of hurting yourself and not realising it If you take too much ketamine you may lose the ability to move and go into a ‘k-hole’. This feels like your mind and body have separated and you can not to do anything about it – which can be a very scary experience.',
        duration: 'To kick in When snorted, ketamine normally takes about 15 minutes to take effect. When taken orally, it will take longer, around 20 minutes to an hour.  How long it lasts The buzz can last around for 30 minutes to an hour, but the effects really depend on how much you take.  After effects People may feel down and low in mood for a few days after using ketamine.  ',
        mixing: 'If you mix ketamine with other drugs, particularly depressant drugs like alcohol, benzodiazepines or opiates, you risk collapsing, passing out and/or seriously injuring yourself. You could also choke, especially if you vomit.  Ketamine can also be very dangerous when mixed with ecstasy or amphetamine (speed), as it can cause high blood pressure.  If you take lots of ketamine and mix it with other drugs you could die.',
        addiction: 'People who become addicted to ketamine will keep taking it – whether they’re aware of the health risks or not. Others will attend drug treatment services to help them stop.  People who use ketamine regularly can develop a tolerance to it, which could lead to them taking even more to get the effects they’re looking for.  There are no physical withdrawal symptoms with ketamine, so ketamine addiction is sometimes called a psychological dependence.',
        price: '35',
        image: 'https://i.ibb.co/HB83NqX/Ketamine.jpg',
        video: 'https://www.youtube.com/embed/d_ey_a_yN6Q',
        alsoCalled: ['VitaminK', 'Super K', 'Special K', 'K', 'Green', 'Donkey Dust', 'Ket', 'Wonk']
    },
    {
        name: 'Cannabis',
        look: 'Weed Also known as grass, weed is made from drying out the leaves and flowering parts of the cannabis plant. It can look like dried herbs and is usually brownish-green in colour.  Skunk This is the name given for particular strains of grass that are very strong. Skunk’s become very popular in recent years and is often bright, pale or dark green in colour and covered in tiny crystals.  Hash/hashish Not nearly as common as it used to be, hash (or hashish) is made from the resin of the cannabis plant and can be black, brown, soft or hard – depending on the type.  Cannabis oil This is a dark, sticky and honey-coloured substance that’s much less common than other types.  "Dab"/"shatter" These are highly concentrated forms of cannabis that are extracted using butane. They come in a solid form known as "dab" or "shatter" and can be used as e-liquids in vape pens.  ',
        method: 'Smoke spliffs In the UK, most people mix it with tobacco and roll it into a cannabis cigarette known as a spliff or joint. Some people don’t use tobacco at all and make weed-only spliffs - either because they prefer it that way or to avoid becoming dependent on nictotine.  Smoke bongs Users do this mix by mixing the drug with tobacco and putting it in a pipe, lighting it, and then inhaling the smoke through water out of a large tube. There are many types of bongs, and not everyone uses tobacco. Like with joints, using tobacco in bongs increases the risk of nicotine dependence.  Eat and drink it (edibles) People do this by mixing it into cakes (hash brownies), tea, yoghurt or sweets (gummies/lollipops). The amount of cannabis in these products can vary greatly and sometimes other harmful drugs are added too. The effects of consuming edibles are unpredictable and it can be very easy to accidentally take a larger dose than you wanted to.  Vape it This method has become more popular in recent years. Most people use a vapouriser which heats the cannabis, rather than burning it. Very little is known about the health impact of vaping cannabis.  Smoking cannabis with tobacco increases the risk of becoming dependent on nicotine. To avoid this, don’t use tobacco in bongs and spliffs.',
        effect: 'The effects of cannabis can vary massively. Some people say feeling `stoned` makes them feel chilled out and happy in their own thoughts, while others say it makes them giggly and chatty. But it can also make people feel lethargic, unmotivated and some people become paranoid, confused and anxious.  The sort of experience you have depends on a lot of thinks like;  the kind of person you are (e.g. outgoing or shy) the mood you`re in, (if you`re feeling down it will probably make you feel worse) the environment you`re in (you`re more likely to feel paranoid or anxious if you don`t feel comfortable where you are or if you`re with people you don`t trust) how much THC it has (the main psychoactive compound in cannabis) how much CBD it has (which is thought to make users less likely to feel anxious and paranoid) how much you take how often you take it Cannabis changes how you think and some people say it gives them a different perspective on things. It does affect your judgement though and people often think conversations or thoughts they have (whether good or bad) are much more deep or important when they’re stoned than they would do normally.  It can also make you hungry, known as having ‘the munchies’, or make you feel sick, known as ‘a whitey’. It can make you feel drowsy or sleepy and can give you the sense that time is slowing down.  THC & CBD The hallucinogenic effects of cannabis are mainly due to a compound in cannabis called THC (tetrahydrocannabinol).  The other important compound in cannabis is CBD (cannabidiol). Skunk and other forms of strong cannabis contain high levels of THC but very little, or no, CBD.  It is thought that CBD can balance out some of the effects of THC and make users less likely to feel anxious and paranoid. You can’t tell from looking or smelling cannabis whether there is a balance of CBD and THC in it, but in general, hash may have more CBD than skunk.  ',
        duration: 'To kick in: When smoked, it normally takes a minute or two to feel stoned. If you eat cannabis, it can up to an hour.  How long it lasts: This depends on how much you smoke. Generally, the effect is strongest for about 10 minutes to half an hour after smoking cannabis, but if you smoke a lot, you may still feel stoned for a couple of hours. If you eat cannabis, the peak effects can last for 2 to 4 hours, and there may even be a few more hours before the effects wear off completely.  After effects: People may still feel the effects the next day, particularly after a heavy session.  ',
        mixing: 'Any time you mix drugs together you take on new risks.  For example, if you drive when stoned or high you double your chances of having a fatal or serious injury car crash, but if you drive after mixing cannabis with alcohol, you’re 16 times more likely to crash.  Smoking or vaping cannabis with tobacco increases the risk of becoming addicted to nicotine which is the addictive drug in tobacco.',
        addiction: 'Heavy cannabis users often get cravings and find it hard not to take the drug – even when they know it’s causing them physical, mental or social problems.  When heavy users do try to stop they can:  feel moody and irritable feel sick find it hard to sleep find it hard to eat experience sweating and shaking get diarrhoea If you roll your spliffs with tobacco, you’re also at risk of getting addicted (or staying addicted) to nicotine.',
        price: '15',
        image: 'https://i.ibb.co/bmbjGGB/Cannabis.jpg',
        video: 'https://www.youtube.com/embed/Nlcr1jd_Tok',
        alsoCalled: ['Weed', 'Skunk', 'Sinsemilla', 'Sensi', 'Resin', 'Puff', 'Pot', 'Marijuana', 'Herb', 'Hashish', 'Hash', 'Grass', 'Ganja', 'Draw', 'Dope', 'Bud', 'Bhang', 'Pollen']
    },
    {
        name: 'Magic-mushrooms',
        look: 'Many poisonous mushrooms look very similar to ‘magic mushrooms’ and it’s easy for pickers to mistake them. People have fallen severely ill or even died from eating a poisonous mushroom.  Magic mushrooms are often sold raw or dried. In the UK, the most common types are liberty caps (Psilocybe semilanceata) and fly agaric (Amanita muscaria).  Liberty caps look like small tan-coloured mushrooms Fly agarics look like red and white spotted toadstools It’s important to know that some types of magic mushroom are stronger than others. For example, the fly agaric mushroom is usually more potent than the liberty cap mushroom.  Liquid psilocybin is another way of taking magic mushrooms. It’s made by extracting psilocybin, the naturally occurring psychedelic drug found in mushrooms like liberty caps, and is a clearish pale brown colour. It comes in vials (small bottles).  ',
        method: 'By eating it After picking, liberty caps are often eaten raw or are dried out and stored. People don’t tend to eat fly agaric mushrooms raw as they can make you feel very sick.  By drinking it Some people make tea from dried mushrooms.  By taking drops of liquid psilocybin Liquid psilocybin is made by extracting psilocybin, the naturally occurring psychedelic drug found in mushrooms like liberty caps.',
        effect: 'The strength of magic mushrooms varies depending on their freshness, the season and where they grow. It`s very difficult to predict the strength of magic mushrooms.  For most people, the world appears distorted when they take mushrooms. Colours, sounds, objects and even time can all seem very different.  Some people get mild hallucinations, which are also called ‘visuals’.  Taking mushrooms can make you feel:  very giggly euphoric in awe of the people and things around you energised excited It can also make you feel:  paranoid anxious panicked overwhelmed like vomiting How you feel will be affected by how much you take, your surroundings, who you’re with and how comfortable you are with them, as well as by your mood.  So if you’re in a bad mood, feeling worried or depressed, the magic mushrooms might just make those feelings worse.',
        duration: 'How long the effects last and the drug stays in your system depends on how much you’ve taken, your size, whether you’ve eaten and what other drugs you may have also taken.  If you feel like you’re having – or are going to have – a bad trip, let your friends know and get their help. Go to a nice quiet spot where you feel safe and can relax.',
        mixing: 'Anytime you mix drugs you take on new risks. Some drugs are riskier to mix than others, avoid taking mushrooms with:  tramadol cocaine amphetamines (speed) cannabis',
        addiction: 'Magic mushrooms are not addictive, but as with LSD, you can become tolerant to the effects quite quickly – and that means you’ll need to take more to get the same effect as before.  ',
        price: '45',
        image: 'https://i.ibb.co/Qdjxbdt/Magic-mushrooms.jpg',
        video: 'https://www.youtube.com/embed/7S9AyYFAAK8',
        alsoCalled: ['Shrooms', 'Philosopher’s Stones', 'Mushies', 'Magics', 'Liberty Caps', 'Liberties', 'Amani', 'Agaric']
    },

];


Drug.create(drugs)
    .then((drugsFromDB) => {
        console.log(`Created ${drugsFromDB.length} drugs`);
        mongoose.connection.close();
    })
    .catch((err) =>
        console.log(`An error occurred while getting drugs from the DB: ${err}`)
    );