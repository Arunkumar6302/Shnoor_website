create table if not exists contact_leads (
  id serial primary key,
  name varchar(120) not null,
  phone varchar(40) not null,
  email varchar(160) not null,
  company varchar(160),
  message text not null,
  created_at timestamptz not null default now()
);
