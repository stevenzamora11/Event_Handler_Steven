import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import Candidate from '@/components/candidate'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className='flex flex-row flex-wrap gap-4 p-4 justify-center items-center'>
      <Candidate
        name='Enmanuel'
        age={30}
        experience={5}
        skills={['JavaScript', 'React', 'Node.js']}
        status='Hired'
        working={true}
        onClick={() => alert('Enmanuel clicked')}
      />
    </div>
  );
}
