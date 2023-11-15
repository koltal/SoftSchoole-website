import Container from "../../Component/Container"
import TickIcon from "../../Component/TickIcon"
import { GoDash } from "react-icons/go";

const Features = () => {
  return (
    <Container className="mt-12">
        <div className="w-full border-1 rounded-b-lg">
            <table className="w-full">
                <thead>
                    <tr className="bg-[#E8EDED] border-t-[2px] font-bold border-black">
                        <td className="px-5 py-2 w-[50%]">Features</td>
                        <td className="w-[20%]">Basic</td>
                        <td className="w-[20%]">Business</td>
                        <td className="pr-2 w-10%]">Enterprise</td>
                    </tr>
                </thead>

                <tbody className="text-[16px] text-[#606665] font-medium">
                    <tr >
                        <td className="px-5 py-6">Company creation and management</td>
                        <td><TickIcon/></td>
                        <td><TickIcon/></td>
                        <td><TickIcon/></td>
                    </tr>

                    <tr >
                        <td className="px-5 py-6">Branch creation and management</td>
                        <td><TickIcon/></td>
                        <td><TickIcon/></td>
                        <td><TickIcon/></td>
                    </tr>

                    <tr >
                        <td className="px-5 py-6">Job role creation and management</td>
                        <td><TickIcon/></td>
                        <td><TickIcon/></td>
                        <td><TickIcon/></td>
                    </tr>

                    <tr >
                        <td className="px-5 py-6">In app messaging</td>
                        <td><GoDash /></td>
                        <td><TickIcon/></td>
                        <td><TickIcon/></td>
                    </tr>

                    <tr >
                        <td className="px-5 py-6">Reports</td>
                        <td><GoDash /></td>
                        <td><TickIcon/></td>
                        <td><TickIcon/></td>
                    </tr>

                    <tr >
                        <td className="px-5 py-6">Task management</td>
                        <td><GoDash /></td>
                        <td><TickIcon/></td>
                        <td><TickIcon/></td>
                    </tr>

                    <tr >
                        <td className="px-5 py-6">Nitro AI integration</td>
                        <td><GoDash /></td>
                        <td><GoDash /></td>
                        <td><TickIcon/></td>
                    </tr>


                </tbody>
            </table>
        </div>
    </Container>
  )
}

export default Features