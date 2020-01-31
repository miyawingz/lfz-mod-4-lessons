drop table if exists "suppliers";
drop table if exists "products";

create table "suppliers" (
  "supplierId"  serial,
  "name"        text not null,
  "city"        text not null,
  "state"       text not null,
  "createdAt"    timestamptz(6) not null default now()
);

create table "products" (
  "productId"   serial,
  "name"        text not null,
  "description" text not null,
  "supplierId"  integer not null,
  "createdAt"   timestamptz(6) not null default now()
);
