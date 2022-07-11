import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'
import styles from './card.module.css'

export default function CardWithImage(post) {
  var imageLink = "https://sandboxsg.com/src/hackathon/" + post['Image Link']
  var title = post["Hackathon Name"]
  var genre = post['Genre']
  var description = post['Description']
  var team = post['Team Number']
  var difficulty = post['Experience']
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        minW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'310px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={imageLink}
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Stack h="300px">
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {title}
          </Heading>
          <Text
            color={'gray.500'}
            overflow={'hidden'}>
            {description}
          </Text>
        </Stack>
        <Text
          // textTransform={'uppercase'}
          // fontWeight={800}
          // fontSize={'sm'}
          className={styles.HackathonType}
        >
          Type: {genre}
        </Text>
        <Text className={styles.HackathonDifficulty} >
          Difficulty: {difficulty}
        </Text>
        <Text className={styles.HackathonTeam}>
          Team: {team}
        </Text>


        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://www.meme-arsenal.com/memes/9f70c849b828ebfb0ec3718ea1f000bb.jpg'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{post['Organisation']}</Text>
            <Text color={'gray.500'}>{post['Registration Date']} · {post['Locality']}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
