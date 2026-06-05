create table if not exists contact_leads (
  id serial primary key,
  name varchar(120) not null,
  phone varchar(40) not null,
  email varchar(160) not null,
  company varchar(160),
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists users (
  id serial primary key,
  name varchar(120) not null,
  email varchar(160) not null unique,
  password_hash varchar(255) not null,
  created_at timestamptz not null default now()
);

create table if not exists orders (
  id serial primary key,
  order_number varchar(40) not null unique,
  user_id int references users(id),
  items jsonb not null,
  total decimal(10, 2) not null,
  status varchar(40) not null default 'Pending',
  created_at timestamptz not null default now()
);
