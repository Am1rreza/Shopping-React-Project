import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lkltrsuabbzlxthkjrlu.supabase.co";
const supabaseApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrbHRyc3VhYmJ6bHh0aGtqcmx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY1NzQ1OTgsImV4cCI6MTk5MjE1MDU5OH0.jNEu0aSaNBRyPEeLQj9wy9P6RJBUNpEjVbwpLG1keXI";

export const supabase = createClient(supabaseUrl, supabaseApiKey);
