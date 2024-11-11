import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fyqwyubocsrewicvxjui.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5cXd5dWJvY3NyZXdpY3Z4anVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2NjM4NzQsImV4cCI6MjA0NDIzOTg3NH0.gtSc9Ju3Se1Zqld64hXzJartn9kD1-K_7lhP2lIl0MU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
