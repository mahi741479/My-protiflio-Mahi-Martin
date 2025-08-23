-- Update connections table to store contact form submissions
ALTER TABLE public.connections 
ADD COLUMN first_name TEXT,
ADD COLUMN last_name TEXT,
ADD COLUMN email TEXT NOT NULL,
ADD COLUMN subject TEXT,
ADD COLUMN message TEXT NOT NULL;

-- Enable Row Level Security
ALTER TABLE public.connections ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact form submissions
CREATE POLICY "Anyone can submit contact forms" 
ON public.connections 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading contact submissions (for admin purposes)
CREATE POLICY "Anyone can view contact submissions" 
ON public.connections 
FOR SELECT 
USING (true);