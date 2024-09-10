import { FacebookB, FaceBookIcon, InstaB,SnapChatB,ThreeDots,TikTokB,WhatsAppB,XIcon } from "@/components/icons";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

export default function AboutPage() {

  const data = [
    {
      title:"شركة منازل العمران للتطوير والاستثمار العقاري",
      svg:WhatsAppB,
      href:"https://wa.me/message/EYAMZXD26SU7O1"
    },
    {
      title:"X.com",
      svg:XIcon,
      href:"https://x.com/almnazl8?t=MNVcmb2lk1gSSUMjdh3AmA&s=09"
    },
    {
      title:"Facebook",
      svg:FacebookB,
      href:"https://www.facebook.com/mnazel.alomran?mibextid=ZbWKwL"

    },
    {
      title:"Snapchat",
      svg:SnapChatB,
      href:"https://www.snapchat.com/add/mnazelalomran?share_id=iqnUCGTxd0w&locale=ar-EG"
    },
    {
      title:"TikTok",
      svg:TikTokB,
      href:"https://www.tiktok.com/@mnazlalomran?_t=8njsj1eqpnu&_r=1"
    },
    {
      title:"Instagram",
      svg:InstaB,
      href:"https://www.instagram.com/mnazlmnazlalmran?igsh=MWc5aGRmdWtpMDkxNQ=="
    }
  ]


  return (
    <div className="w-full  lg:h-[85vh] p-2 lg:space-y-10 space-y-5 en py-5 " >
        <div className="flex justify-center">
          <div className="mx-1">
          <a href="tel:966533307024">+966533307024</a>
          </div>

          <div className="">

          <p>هاتف  </p>
          </div>
          <p></p>
        </div>

      {data.map((a,i)=>(

      <Card className="w-full en ease-in duration-300" isHoverable isPressable > 
      <CardHeader className="flex gap-3">
        <a.svg/>
        <div className="flex flex-col text-center  flex-1">
          <p className="sm:text-sm md:text-md ">{a.title}</p>
        </div>
        <ThreeDots/>
      </CardHeader>
    </Card>
      ))}
      
      
 

    </div>
  );
}
