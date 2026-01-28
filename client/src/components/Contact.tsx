import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertMessageSchema, type InsertMessage } from '@shared/schema';
import { useCreateMessage } from '@/hooks/use-messages';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Send } from 'lucide-react';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';

export function Contact() {
  const { mutate, isPending } = useCreateMessage();
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = (data: InsertMessage) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Let's Connect</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Whether you have an opportunity in mind or just want to chat about data, AI, or wrestling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                <Mail className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Email Me</h3>
                <p className="text-slate-400 mb-4">I'm always open to discussing new opportunities or collaborations.</p>
                <a 
                  href="mailto:icej@mail.sacredheart.edu" 
                  className="text-lg font-medium text-white hover:text-primary transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  <span className="border-b border-transparent group-hover:border-primary">icej@mail.sacredheart.edu</span>
                </a>
              </div>

              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                <Linkedin className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Connect on LinkedIn</h3>
                <p className="text-slate-400 mb-4">Let's expand our professional network.</p>
                <a 
                  href="https://www.linkedin.com/in/jake-ice/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-white hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  linkedin.com/in/jake-ice
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-slate-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" className="bg-slate-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="I'd love to discuss..." 
                            className="bg-slate-50 min-h-[120px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full text-lg h-12 transition-all duration-300 hover:bg-accent hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-accent/20" 
                    disabled={isPending}
                  >
                    {isPending ? "Sending..." : "Send Message"}
                    {!isPending && <Send className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
