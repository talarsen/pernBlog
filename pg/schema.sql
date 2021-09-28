create table posts (
    id INT GENERATED ALWAYS AS IDENTITY,
    title varchar(500) NOT NULL,
    category varchar(255),
    postedOn date NOT NULL DEFAULT CURRENT_DATE,
    content text
);

INSERT INTO posts (title, category, content)
VALUES ('Yosemite in The Fall', 'mountains', 'The best time to visit Yosemite is in the fall. The only downside to visiting Yosemite in the fall is that the waterfalls are not pumping the spring runoff. The best place to camp and mingle in Yosemite is Camp 4. It is a first come first served campground. Camp 4 is for the person who does not mind camping in crowd. Anoter option would be to obtain a wilderness permit for backpacking. Backpackers have millions of acres of pristine wilderness to explore');


INSERT INTO posts (title, category, content)
VALUES ('Lassen Cross Country Ski Trip', 'mountains', 'Lassen National Park is a hidden gem in Northern California. It is a fun park to visit anytime of year and it not known for its crowds. I love to go cross country skiing in Lassen. In winter, it is relatively safe to ski up the park road which is not plowed during the winter. There are amazing runs all along the road for the more experienced skier and backcountry traveler. Be sure to pack plenty of food and water because there are no services in or close to the park.');

INSERT INTO posts (title, category, content)
VALUES ('Bodega Bay Tidepools', 'beaches', 'I used to help lead a week-long environmental science camp trip for sixth graders near Sebastopol, California. One of my favorite days of the week was beach day. We would head out by bus to to Doran Beach. Doran is really long and wide beach just to the south of the Bodega Bay Harbor entrance. Visitors that time the tides just right can experience wonderful tidepooling on the south end of Doran Beach. Pack a pinic lunch and visitors will have a wonderful day exploring. It can get very windy and cold at Doran so be sure to pack warm clothes');

INSERT INTO posts (title, category, content)
VALUES ('Capitola Beach', 'beaches', 'If you love to just hang out at a mellow beach, Capitola Beach near Santa Cruz, Ca is the place to be. Capitola has a small village filled with shops to explore. There are also many restaurants to choose from. One of my favorite places to eat is El Toro Bravo, a little hole in the wall place. Capitola Beach is great for kids and people learning to surf. There is forgiving swell and seasonal lifeguards on duty. Ocassional you can see sea otters in the kelp beds just off the beach. ');