truncate table "suppliers" restart identity;
truncate table "products" restart identity;

INSERT INTO "suppliers" ("name", "city", "state")
VALUES  ('Acme Supply Co', 'Rockford', 'IL'),
        ('Hats R Us', 'Los Angeles', 'CA'),
        ('Dunder Mifflin Inc', 'Scarton', 'OH'),
        ('Tool Time LLC', 'Riverside', 'CA'),
        ('Instrument Emporium', 'Northbrook', 'IL');

INSERT INTO "products" ("name", "description", "supplierId")
VALUES  ('Paper Weight', 'A hevy object used for holding down paper.', 3),
        ('Roadrunner Trap', 'A device for capturing the roadrunner.', 1),
        ('Sticky Notes', 'A small square piece of paper that can be stuck to things.', 3),
        ('Fedora', 'A stylish hat', 2),
        ('Electric Guitar', 'A guitar that uses electricity', 5),
        ('Phillips Head Screwdriver', 'The one that is a plus', 4),
        ('Oversized Target', 'Large oversized target', 1),
        ('Baseball Hat', 'A hat in the style of baseball', 2),
        ('Top Hat', 'Tall cylindrical hat', 2),
        ('Piano', 'A large wood box with 88 keys', 5),
        ('Paper', 'Used for writing', 3),
        ('Trucker Hat', 'A hat worn by truckers', 2),
        ('Needle Nose Pliers', 'Really pointy pliers', 4),
        ('Hammer', 'Used for driving nails', 4),
        ('Anvil', 'Large heavy metal object that often falls from sky.', 1),
        ('Drums', 'The coolest of the instruments', 5);
