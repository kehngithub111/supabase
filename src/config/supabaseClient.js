import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nyzunpwtllimxtqxfzhc.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55enVucHd0bGxpbXh0cXhmemhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNzE1MDEsImV4cCI6MjAyNTk0NzUwMX0.aJPZrj2RX5lClGnxulyg1ZumE08ItHUEcU1MOgy0gpQ";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
