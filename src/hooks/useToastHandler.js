import { useToast } from '@/components/ui/use-toast';

export const useToastHandler = () => {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  return showToast;
};