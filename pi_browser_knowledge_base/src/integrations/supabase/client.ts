import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ucznzpdizangvgtvakef.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjem56cGRpemFuZ3ZndHZha2VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NDc1OTMsImV4cCI6MjA3OTIyMzU5M30.htglIsv5jQ-oO_NwZ5BR8KRBMmJ_jH--XGD3pKAXTUo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Import the supabase client like this:
// For React:
// import { supabase } from "@/integrations/supabase/client";
// For React Native:
// import { supabase } from "@/src/integrations/supabase/client";
