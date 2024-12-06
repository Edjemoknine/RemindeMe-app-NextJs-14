import * as React from "react"
import { Bell, Home, Calendar, PieChart, MessageSquare, Settings, LogOut, Grid, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Dashboard() {
  return (
    <div className="flex h-screen bg-[#1C1C1C]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800 p-4">
        <div className="flex items-center space-x-2 mb-8">
          <div className="h-8 w-8 bg-orange-500 rounded-lg" />
          <span className="font-semibold text-white">Virtus</span>
        </div>
        <div className="space-y-1 mb-8">
          <Input
            placeholder="Search..."
            className="bg-gray-900 border-gray-800"
          />
        </div>
        <nav className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start bg-orange-500/10 text-orange-500"
          >
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Schedule
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <PieChart className="mr-2 h-4 w-4" />
            Progress
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Chats
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </nav>
        <div className="absolute bottom-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1 className="text-xl font-semibold text-white">Task progress <span className="text-gray-500">4/12</span></h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="border-gray-800">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-gray-800">
              <Bell className="mr-2 h-4 w-4" />
              Pro member
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>CV</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 grid gap-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Task Progress Card */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">New tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-4">67%</div>
                <p className="text-gray-400 mb-4">21 Sep 2024</p>
                <Button className="w-full bg-gray-800 hover:bg-gray-700">
                  Start new
                </Button>
              </CardContent>
            </Card>

            {/* Today's Task Card */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Today task</CardTitle>
                <Button variant="ghost" size="icon" className="text-gray-400">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-white">Edit network design</div>
                    <div className="text-xs text-gray-400">Low impact</div>
                  </div>
                  <Progress value={66} className="bg-gray-800" />
                  <div className="text-sm text-gray-400">2/3</div>
                  <Button className="w-full bg-gray-800 hover:bg-gray-700">
                    Send Feedback
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Performance Card */}
            <Card className="bg-gray-900 border-gray-800 lg:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Awesome performance</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-400">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-32">
                    <DropdownMenuItem>Weekly</DropdownMenuItem>
                    <DropdownMenuItem>Monthly</DropdownMenuItem>
                    <DropdownMenuItem>Yearly</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-4">85%</div>
                <div className="h-[200px] bg-gray-800 rounded-lg" />
              </CardContent>
            </Card>
          </div>

          {/* Goals Section */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Main goal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-medium text-white">Dashboard design</div>
                      <Progress value={64} className="mt-2 bg-gray-800" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Motion design</div>
                      <Progress value={87} className="mt-2 bg-gray-800" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Assignments */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Assignment for all team</CardTitle>
                <Button variant="ghost" size="icon" className="text-gray-400">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>A1</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium text-white">Creating persona</div>
                        <div className="text-xs text-gray-400">research team</div>
                      </div>
                    </div>
                    <Button variant="outline" className="border-gray-800">
                      Pending
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>S1</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium text-white">Documents</div>
                        <div className="text-xs text-gray-400">research team</div>
                      </div>
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Progress
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

