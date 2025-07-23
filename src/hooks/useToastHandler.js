import { useToast } from '@/components/ui/use-toast';

export const useToastHandler = () => {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: "🚧 Halooo,maaf fitur ini masih dalam proses! 🚀"
    });
  };

  return showToast;
};