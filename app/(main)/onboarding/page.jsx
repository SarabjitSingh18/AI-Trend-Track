import React from 'react'
import OnBoardingForm from './_components/onboarding-form'
import { industries } from '../../../data/industries'
import { getUserOnboardingStatus } from '../../../actions/user'
import { redirect } from 'next/navigation'

 
export default async function onBoardingPage() {
    const {isOnboarded} = await getUserOnboardingStatus()
 
    if(isOnboarded){
        redirect('/dashboard')
    }
  return (
    <main>
        <OnBoardingForm industries = {industries} />
    </main>
  )
}
